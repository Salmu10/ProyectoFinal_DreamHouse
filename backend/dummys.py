from random import randint
import django
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'dreamhouse.settings')
django.setup()
from dreamhouse.app.houses.serializers import CategorySerializer, HouseSerializer
from dreamhouse.app.users.serializers import userSerializer

categories_name = ["for_sale", "rent", "vacational_rent"]
categories_image = ["for_sale.jpg", "rent.jpg", "vacational_rent.jpg"]

usernames = ["salmu10", "salvamu10", "salva"]
emails = ["salmu10@gmail.com", "salvamu10@gmail.com", "salva@gmail.com"]
passwords = ["123456"]
booleans = [1, 0]

house_images = [ "https://cdn.pixabay.com/photo/2017/06/12/19/02/cat-2396473__480.jpg", "https://cdn.pixabay.com/photo/2016/10/16/10/00/cat-1744750__480.jpg", "https://cdn.pixabay.com/photo/2015/06/03/13/13/cats-796437__480.jpg", "https://cdn.pixabay.com/photo/2017/02/26/14/12/cat-2100306__480.jpg" ]

house_locations = ["Ontinyent", "Benidorm", "Barcelona", "Madrid", "Bilbao", "Sevilla"]
house_latitudes = [38.822419275175434, 38.54019120496513, 41.39443777006087, 40.40299289922746, 43.263585954587874, 37.4029661333394]
house_longitudes = [-0.598569721134892, -0.11831413551159968, 2.1796789126551057, -3.673861409933688, -2.931251920233635, -5.974254058838136]
prices = ["150000", "800", "300"]

def create_users():
    for i in range(3):
        user = {
            'username': usernames[i],
            'email': emails[i],
            'password': passwords[0],
        }
        userSerializer.register(context=user)
        
def create_categories():
    for i in range(3):
        category = {
            'name': categories_name[i],
            'image': categories_image[i],
        }
        serializer = CategorySerializer(data=category)
        if serializer.is_valid(raise_exception=True):
            serializer.save()

def create_houses():
    for i in range(6):
        random_action = randint(0, len(categories_name)-1)
        house = {
            'category': categories_name[random_action],
            'image': 'house.jpg',
            'price': prices[random_action],
            'country': 'España',
            'location': house_locations[i],
            'address': 'C/ ...' + house_locations[i],
            'latitude': house_latitudes[i],
            'longitude': house_longitudes[i]
        }

        house_services = {
            'rooms': randint(2, 5),
            'bathrooms': randint(1, 2),
            'pool': booleans[randint(0, len(booleans)-1)],
            'wifi': booleans[randint(0, len(booleans)-1)],
            'parking': booleans[randint(0, len(booleans)-1)]
        }

        # house_images = house_images

        username_context = { 'username': usernames[randint(0, len(usernames)-1)] }

        HouseSerializer.create(user=username_context, house_context=house, services_context=house_services, images_context=house_images)


if __name__ == '__main__':
    print('Dummys start')
    create_users()
    print('Useres created')
    create_categories()
    print('Categories created')
    create_houses()
    print('Houses created')
    print('Dummys end')