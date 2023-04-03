from rest_framework import serializers
from .models import Category
from .models import House
from .models import HouseServices
from .models import HouseImages
from dreamhouse.app.users.models import User
from random import randint
from django.db.models import Q

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'slug', 'name', 'image']

    def to_category(self, instance):
        return {
            "id": instance.id,
            "slug": instance.slug,
            "name": instance.name,
            "image": instance.image,
        }

class HouseSerializer(serializers.ModelSerializer):

    class Meta:
        model = House
        fields = ['id', 'category', 'user_id', 'image', 'price', 'country', 'location', 'address', 'latitude', 'longitude']

    def to_House(instance):
        return {
            "id": instance.id,
            "category": instance.category,
            "user": instance.user_id,
            "image": instance.image,
            "price": instance.price,
            "country": instance.country,
            "location": instance.location,
            "address": instance.address,
            "latitude": instance.latitude,
            "longitude": instance.longitude,
        }
    
    def create(user, house_context, services_context):
        username = user
        category_name = house_context['category']
        category = Category.objects.get(name=category_name)

        user = User.objects.get(username=username)

        if user is None:
            raise serializers.ValidationError('User not found')

        if category is None:
            raise serializers.ValidationError('Category not found')

        house = House.objects.create(
                    category=category,
                    user_id=user.id,
                    image=house_context['image'], 
                    price=house_context['price'], 
                    country=house_context['country'],
                    location=house_context['location'],
                    address=house_context['address'],
                    latitude=house_context['latitude'],
                    longitude=house_context['longitude']
                )
        
        if house is None:
            raise serializers.ValidationError('Create house error')
        
        house.save()
        
        house_services = HouseServicesSerializer.create(context=services_context, house_id=house)

        if house_services is None:
            raise serializers.ValidationError('Create house services error')

        return house.id
    
    def getHousesFiltered(filters_context):

        house_list = []
        categories = []
        services_filters = {}
        house_filters = {}
        category_filters = {}
        # category_id = 0

        map = filters_context.get('map', False)
        category = filters_context.get('category', '')
        min_price = filters_context.get('min_price', '')
        rooms = filters_context.get('rooms', '')
        bathrooms = filters_context.get('bathrooms', '')
        wifi = filters_context.get('wifi', False)
        pool = filters_context.get('pool', False)
        parking = filters_context.get('parking', False)

        page = int(filters_context['page'])
        limit = int(filters_context['limit'])
        offset = (page - 1) * 3

        #Filtro de Habitaciones
        if (rooms == ''):
            services_filters['rooms__gt'] = 0
        elif (int(rooms) >= 5):
            services_filters['rooms__gte'] = 5
        else:
            services_filters['rooms'] = int(rooms)

        #Filtro de Cuartos de Baño
        if (bathrooms == ''):
            services_filters['bathrooms__gt'] = 0
        elif (int(bathrooms) >= 5):
            services_filters['bathrooms__gte'] = 5
        else:
            services_filters['bathrooms'] = int(bathrooms)

        #Filtro de Wifi
        if (wifi == 'true'):
            services_filters['wifi'] = True

        #Filtro de Wifi
        if (pool == 'true'):
            services_filters['pool'] = True

        #Filtro de Wifi
        if (parking == 'true'):
            services_filters['parking'] = True

        #Filtro de Cuartos de Baño
        if (category == ''):
            category_filters['name__contains'] = ''
            categories_id = Category.objects.filter(**category_filters)
        elif (category == 'for_sale'):
            category_filters['name__iexact'] = 'for_sale'
            categories_id = Category.objects.filter(**category_filters)
        elif (category == 'rent'):
            category_filters['name__iexact'] = 'rent'
            categories_id = Category.objects.filter(**category_filters)
        else:
            category_filters['name__iexact'] = 'vacational_rent'
            categories_id = Category.objects.filter(**category_filters)

        for category in categories_id:
            categories.append(category.id)

        houses_id = HouseServices.objects.filter(**services_filters)
        
        for house in houses_id:
            house_list.append(house.id)

        #Filtro de vista
        if (map == 'true'):
            houses = House.objects.filter(pk__in=house_list, category__in=categories)
        else: 
            houses = House.objects.filter(pk__in=house_list, category__in=categories)[offset:offset+3]

        total_houses = House.objects.filter(pk__in=house_list, category__in=categories)

        houses_res = {'houses': houses, 'total_houses': len(total_houses)}

        return houses_res
    
class HouseServicesSerializer(serializers.ModelSerializer):

    class Meta:
        model = HouseServices
        fields = ['id', 'house', 'rooms', 'bathrooms', 'pool', 'wifi', 'parking']

    def to_HouseServices(instance):
        return {
            "id": instance.id,
            "house": instance.house,
            "rooms": instance.rooms,
            "bathrooms": instance.bathrooms,
            "pool": instance.pool,
            "wifi": instance.wifi,
            "parking": instance.parking,
        }

    def create(context, house_id):

        house_services = HouseServices.objects.create(
                            house=house_id, 
                            rooms=context['rooms'], 
                            bathrooms=context['bathrooms'], 
                            pool=context['pool'],
                            wifi=context['wifi'],
                            parking=context['parking']
                        )
        
        house_services.save()
        
        return house_services
