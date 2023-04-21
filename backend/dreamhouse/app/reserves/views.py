from rest_framework.response import Response
from rest_framework import viewsets, status
from .serializers import ReserveSerializer
from rest_framework.permissions import (IsAuthenticated, AllowAny)
from dreamhouse.app.core.permissions import IsAdmin
from .models import Reserve, User
from environ import Env
import requests, os

env = Env()

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
env.read_env(os.path.join(BASE_DIR+'/dreamhouse', '.env'))

def send_email(subject, message, from_email, recipient):
    return requests.post(env('api_url'), auth=("api", env('api_key')), data={"from": from_email, "to": recipient, "subject": subject, "text": message})

class ReserveView(viewsets.GenericViewSet):

    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = [AllowAny]
        else:
            self.permission_classes = [IsAuthenticated, IsAdmin]
        return super(ReserveView, self).get_permissions()

    def getHouseReserves(self, request, house_id):
        serializer = ReserveSerializer.getHouseReserves(house_id=house_id)
        return Response(serializer)

    def getUserReserves(self, request, user_id):
        reserves = Reserve.objects.filter(user_id=user_id)
        serializer = ReserveSerializer(reserves, many=True)
        return Response(serializer.data)

    def reserve(self, request):
        username = request.user
        reserve = request.data.get('reserve')
        serializer = ReserveSerializer.reserve(context_user=username, context=reserve)
        return Response(ReserveSerializer.to_reserve(serializer))

    def sendEmail(self, request):
        mail = request.data.get('mail')
        owner = User.objects.get(pk=mail['house_owner'])
        send_email(mail['subject'], mail['desc'], mail['user'], "salmu1997@gmail.com")
        return Response({'data': 'Email sended successfully'})
    
    def deleteReserve(self, request, id):
        reserve = Reserve.objects.get(id=id)
        reserve.delete()
        return Response({'data': 'Reserve deleted successfully'})

class ReserveAdminView(viewsets.GenericViewSet):
    permission_classes = [IsAdmin]

    def getAllReserves(self, request):
        data = Reserve.objects.all()
        serializer = ReserveSerializer(data, many=True)
        return Response(serializer.data)

    def deleteReserveAdmin(self, request, id):
        reserve = Reserve.objects.get(id=id)
        reserve.delete()
        return Response({'data': 'Reserve deleted successfully'})

