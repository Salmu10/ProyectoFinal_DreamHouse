from django.urls import path
from .views import ReserveView, ReserveAdminView

urlpatterns = [
    path('reserve/<int:house_id>', ReserveView.as_view({"get": "getHouseReserves"})),
    path('reserve', ReserveView.as_view({"post": "reserve"})),
    path('send_email', ReserveView.as_view({"post": "sendEmail"})),
    path('deleteReserve/<int:id>', ReserveAdminView.as_view({"delete": "deleteReserve"})),
    path('reserves', ReserveAdminView.as_view({"get": "getAllReserves"})),
    path('deleteReserveAdmin/<int:id>', ReserveAdminView.as_view({"delete": "deleteReserveAdmin"})),
]
