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
    
    def create(user, data_context, main_image, images_context):
        username = user
        category_name = data_context['category']
        category = Category.objects.get(name=category_name)

        user = User.objects.get(username=username)

        if user is None:
            raise serializers.ValidationError('User not found')

        if category is None:
            raise serializers.ValidationError('Category not found')

        house = House.objects.create(
                    category=category,
                    user_id=user.id,
                    image=main_image, 
                    price=data_context['price'], 
                    country=data_context['country'],
                    location=data_context['location'],
                    address=data_context['address'],
                    latitude=data_context['latitude'],
                    longitude=data_context['longitude']
                )
        
        if house is None:
            raise serializers.ValidationError('Create house error')
        
        house.save()
        
        house_services = HouseServicesSerializer.create(context=data_context, house_id=house)

        if house_services is None:
            raise serializers.ValidationError('Create house services error')
        
        if images_context:
            for image in images_context:
                HouseImages.objects.create(image=image, house_id=house.id)

        return house.id

    def update(house_id, data_context, main_image, images_context):

        category_name = data_context['category']
        category = Category.objects.get(name=category_name)

        if category is None:
            raise serializers.ValidationError('Category not found')

        House.objects.filter(pk=house_id).update(
            category=category,
            price=data_context['price'], 
            country=data_context['country'],
            location=data_context['location'],
            address=data_context['address'],
            latitude=data_context['latitude'],
            longitude=data_context['longitude']
        )

        if (data_context['pool'] == 'true'):
            pool_val = True
        else :
            pool_val = False

        if (data_context['wifi'] == 'true'):
            wifi_val = True
        else :
            wifi_val = False
        
        if (data_context['parking'] == 'true'):
            parking_val = True
        else :
            parking_val = False

        HouseServices.objects.filter(pk=house_id).update(
            rooms=data_context['rooms'], 
            bathrooms=data_context['bathrooms'], 
            pool=pool_val,
            wifi=wifi_val,
            parking=parking_val
        )

        if main_image:
            House.objects.filter(pk=house_id).update(
                image=main_image
            )

        # if images_context:
        #     for image in images_context:
        #         HouseImages.objects.delete(house_id=house)
        #         # HouseImages.objects.filter(house_id=id).update(image=image)
        #         HouseImages.objects.create(image=image, house_id=house)

        house_res = House.objects.get(pk=house_id)

        return house_res.id
    
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
        max_price = filters_context.get('max_price', '')
        rooms = filters_context.get('rooms', '')
        bathrooms = filters_context.get('bathrooms', '')
        wifi = filters_context.get('wifi', False)
        pool = filters_context.get('pool', False)
        parking = filters_context.get('parking', False)

        page = int(filters_context['page'])
        limit = int(filters_context['limit'])
        offset = (page - 1) * 4

        #Filtro de Categorias
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

        #Filtro de Precio
        if (min_price == '' and max_price == ''):
            print('No hay rangos de precios')
        elif (min_price != '' and max_price == ''):
            house_filters['price__gt'] = int(min_price)
        elif (min_price == '' and max_price != ''):
            house_filters['price__lt'] = int(max_price)
        else:
            house_filters['price__range'] = (int(min_price),  int(max_price))

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

        houses_id = HouseServices.objects.filter(**services_filters)
        
        for house in houses_id:
            house_list.append(house.id)

        #Filtro de vista
        if (map == 'true'):
            houses = House.objects.filter(pk__in=house_list, category__in=categories, **house_filters)
        else: 
            houses = House.objects.filter(pk__in=house_list, category__in=categories, **house_filters)[offset:offset+4]

        total_houses = House.objects.filter(pk__in=house_list, category__in=categories, **house_filters)

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

        if (context['pool'] == 'true'):
            pool_val = True
        else :
            pool_val = False

        if (context['wifi'] == 'true'):
            wifi_val = True
        else :
            wifi_val = False
        
        if (context['parking'] == 'true'):
            parking_val = True
        else :
            parking_val = False

        house_services = HouseServices.objects.create(
                            house=house_id, 
                            rooms=context['rooms'], 
                            bathrooms=context['bathrooms'], 
                            pool=pool_val,
                            wifi=wifi_val,
                            parking=parking_val
                        )
        
        house_services.save()
        
        return house_services
