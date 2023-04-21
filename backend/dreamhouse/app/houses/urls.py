from django.urls import path
from .views import CategoryView
from .views import HouseView
from .views import HouseServicesView
from .views import HouseImagesView

urlpatterns = [
    # Categories
    path('categories', CategoryView.as_view({'get': 'getCategories'})),
    path('category/<str:slug>', CategoryView.as_view({'get': 'getOneCategory'})),
    path('category', CategoryView.as_view({'post': 'post'})),
    path('category/<str:slug>', CategoryView.as_view({'put': 'put'})),
    path('category/<str:slug>', CategoryView.as_view({'delete': 'delete'})),

    # Houses
    path('houses', HouseView.as_view({'get': 'getHouses'})),
    path('house/<int:id>', HouseView.as_view({'get': 'getOneHouse'})),
    path('houses_filtered', HouseView.as_view({'get': 'getHousesFiltered'})),
    path('user_houses/<int:user_id>', HouseView.as_view({'get': 'getUserHouses'})),
    path('house', HouseView.as_view({'post': 'post'})),
    path('house_setimages/<int:id>', HouseView.as_view({'post': 'postImages'})),
    path('house/<int:id>', HouseView.as_view({'put': 'put'})),
    path('house_setimages/<int:id>', HouseView.as_view({'put': 'putImages'})),
    path('house/<int:id>', HouseView.as_view({'delete': 'delete'})),

    # House Services
    path('house_services/<int:id>', HouseServicesView.as_view({'get': 'getOneHouseServices'})),

    # House Images
    path('house_images/<int:id>', HouseImagesView.as_view({'get': 'getOneHouseImages'})),
]