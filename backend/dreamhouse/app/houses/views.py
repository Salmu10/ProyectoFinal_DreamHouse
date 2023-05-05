from django.http import JsonResponse
from django.shortcuts import render

from rest_framework.response import Response
from rest_framework import viewsets

from .models import Category
from .serializers import CategorySerializer
from .models import House
from .serializers import HouseSerializer
from .models import HouseServices
from .serializers import HouseServicesSerializer
from .models import HouseImages
from rest_framework.permissions import (AllowAny, IsAuthenticated)
from dreamhouse.app.core.permissions import IsAdmin

class CategoryView(viewsets.GenericViewSet):

    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = [AllowAny]
        else:
            self.permission_classes = [IsAdmin]
        return super(CategoryView, self).get_permissions()

    def getCategories(self, request):
        categories = Category.objects.all()
        categories_serializer = CategorySerializer(categories, many=True)
        return Response(categories_serializer.data)
    
    def getOneCategory(self, request, slug):
        category = Category.objects.get(slug=slug)
        category_serializer = CategorySerializer(category)
        return Response(category_serializer.data)
    
    def post(self, request):
        category = request.data.get('category')
        serializer = CategorySerializer(data=category)
        if (serializer.is_valid(raise_exception=True)):
            serializer.save()
        return Response(serializer.data)
    
    def put(self, request, slug):
        category = Category.objects.get(slug=slug)
        data = request.data.get('category')
        serializer = CategorySerializer(instance=category, data=data, partial=True)
        if (serializer.is_valid(raise_exception=True)):
            serializer.save()
        return Response(serializer.data)
    
    def delete(self, request, slug):
        category = Category.objects.get(slug=slug)
        category.delete()
        return Response({'data': 'Category deleted successfully'})
    
class HouseView(viewsets.GenericViewSet):

    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = [AllowAny]
        else:
            self.permission_classes = [IsAuthenticated, IsAdmin]
        return super(HouseView, self).get_permissions()

    def getHouses(self, request):
        houses = House.objects.all()
        houses_serializer = HouseSerializer(houses, many=True)
        return Response(houses_serializer.data)
    
    def getOneHouse(self, request, id):
        house = House.objects.get(pk=id)
        house_serializer = HouseSerializer(house)
        return Response(house_serializer.data)
    
    def getHousesFiltered(self, request):
        filters = {x:request.GET.get(x) for x in request.GET.keys()}
        houses = HouseSerializer.getHousesFiltered(filters_context=filters)
        houses_serializer = HouseSerializer(houses['houses'], many=True)
        context = {'houses': houses_serializer.data, 'total_houses': houses['total_houses']}
        return Response(context)
    
    def getUserHouses(self, request, user_id):
        print(user_id)
        houses = House.objects.filter(user_id=user_id)
        serializer = HouseSerializer(houses, many=True)
        print(houses)
        return Response(serializer.data)
    
    def post(self, request):
        username = request.user
        data = request.POST
        main_image = request.FILES.get('main_image')
        images_list = request.FILES.getlist('imagenes')
        serializer = HouseSerializer.create(user=username, data_context=data, main_image=main_image, images_context=images_list)
        house = House.objects.get(pk=serializer)
        house_serializer = HouseSerializer(house)
        return Response(house_serializer.data)
    
    def put(self, request, id):
        data = request.POST
        main_image = request.FILES.get('main_image')
        images_list = request.FILES.getlist('imagenes')
        serializer = HouseSerializer.update(house_id=id, data_context=data, main_image=main_image, images_context=images_list)
        house = House.objects.get(pk=serializer)
        house_serializer = HouseSerializer(house)
        return Response(house_serializer.data)
    
    def putImages(self, request, id):
        print(request.FILES)
        if request.FILES:
            for image in request.FILES.getlist('imagenes'):
                HouseImages.objects.filter(house_id=id).update(image=image)
        return Response({'response': 'ok'})
    
    def delete(self, request, id):
        house = House.objects.get(pk=id)
        house.delete()
        return Response({'data': 'House deleted successfully'})
    
class HouseServicesView(viewsets.GenericViewSet):
        
    def getOneHouseServices(self, request, id):
        house_Services = HouseServices.objects.get(house_id=id)
        house_services_serializer = HouseServicesSerializer(house_Services)
        return Response(house_services_serializer.data)
    
class HouseImagesView(viewsets.GenericViewSet):
        
    def getOneHouseImages(self, request, id):
        house = House.objects.get(pk=id)
        main_image = house.image.url
        house_images = HouseImages.objects.filter(house_id=id)
        images_list = [{'id': image.id, 'image_url': image.image.url} for image in house_images]
        return Response({ 'main_image': main_image, 'images_list': images_list})