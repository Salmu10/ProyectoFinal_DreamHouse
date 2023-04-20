from django.db import models
from dreamhouse.app.users.models import User
from dreamhouse.app.houses.models import House

class Reserve(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="reserve_user")
    house = models.ForeignKey(House, on_delete=models.CASCADE, related_name="reserve_house")
    initial_date = models.DateField()
    end_date = models.DateField()
    total_price = models.IntegerField()

    def __str__(self):
        return str(self.id)