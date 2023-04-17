from rest_framework.response import Response
from rest_framework import viewsets, status
from .serializers import ReserveSerializer
from rest_framework.permissions import (IsAuthenticated, AllowAny)
from dreamhouse.app.core.permissions import IsAdmin
from .models import Reserve

class ReserveView(viewsets.GenericViewSet):
    permission_classes = (IsAuthenticated,)

    def reserve(self, request):
        username = request.user
        reserve = request.data.get('reserve')
        serializer = ReserveSerializer.reserve(context_user=username, context=reserve)
        return Response(ReserveSerializer.to_reserve(serializer))
        # return Response('Hola')

    def getHouseReserves(self, request, house_id):
        print(house_id)
        print(request)
        # serializer = ReserveSerializer.getHouseReserves(context=serializer_context)
        # return Response(ReserveSerializer.to_reserve(serializer))
        return Response('Hola')
    
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

