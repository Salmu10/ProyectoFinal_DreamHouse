from django.urls import path
from .views import CategoryView
from .views import HouseView
# from .views import HouseServicesView

urlpatterns = [
    # Categories
    path('categories', CategoryView.as_view({'get': 'getCategories'})),
    path('category/<str:slug>', CategoryView.as_view({'get': 'getOneCategory'})),
    path('category', CategoryView.as_view({'post': 'post'})),
    path('category/<str:slug>', CategoryView.as_view({'put': 'put'})),
    path('category/<str:slug>', CategoryView.as_view({'delete': 'delete'})),

    # Houses
    path('houses', HouseView.as_view({'get': 'getHouses'})),
    path('houses_filtered', HouseView.as_view({'get': 'getHousesFiltered'})),
    path('house/<int:id>', HouseView.as_view({'get': 'getOneHouse'})),
    path('house', HouseView.as_view({'post': 'post'})),
    path('house/<int:id>', HouseView.as_view({'put': 'put'})),
    path('house/<int:id>', HouseView.as_view({'delete': 'delete'})),

    # House Services

]