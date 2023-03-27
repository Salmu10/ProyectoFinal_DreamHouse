from django.contrib import admin
from .models import Category, House, HouseServices

admin.site.register(Category)
admin.site.register(House)
admin.site.register(HouseServices)