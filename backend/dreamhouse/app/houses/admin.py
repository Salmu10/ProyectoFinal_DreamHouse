from django.contrib import admin
from .models import Category, House, HouseServices, HouseImages

admin.site.register(Category)
admin.site.register(House)
admin.site.register(HouseServices)
admin.site.register(HouseImages)