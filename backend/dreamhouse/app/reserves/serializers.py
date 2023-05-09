from datetime import datetime
from rest_framework import serializers
from .models import Reserve
from dreamhouse.app.users.models import User
from dreamhouse.app.houses.models import House

class ReserveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reserve
        fields = ['id', 'user_id', 'house_id', 'initial_date', 'end_date', 'total_price']

    def to_reserve(instance):
        return ({
            "id": instance.id,
            "user": instance.user_id,
            "house": instance.house_id,
            "initial_date": instance.initial_date,
            "end_date": instance.end_date,
            "total_price": instance.total_price
        })

    def reserve(context_user, context):
        username = context_user
        house_id = context['house_id']
        initial_date = context['initial_date']
        end_date = context['end_date']
        total_price = context['total_price']

        user = User.objects.get(username=username)

        if user is None:
            raise serializers.ValidationError('User not found')

        house = House.objects.get(pk=house_id)

        if house is None:
            raise serializers.ValidationError('House not found')

        reserve = Reserve.objects.create(user_id=user.id, house_id=house.id, initial_date=initial_date, end_date=end_date, total_price=total_price)
        reserve.save()

        return reserve

    def getHouseReserves(house_id):
        reserves = Reserve.objects.filter(house_id=house_id)

        books = [{'from': reserve.initial_date, 'to': reserve.end_date} for reserve in reserves]
        
        return books

    def delete(context):
        reserve_id = context['reserve_id']

        reserve = Reserve.objects.get(pk=reserve_id)

        if reserve is None:
            raise serializers.ValidationError('Reserve is not find')

        reserve.delete()
        return True
