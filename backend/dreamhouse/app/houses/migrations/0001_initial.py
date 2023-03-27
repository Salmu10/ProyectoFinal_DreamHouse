# Generated by Django 4.1.7 on 2023-03-10 10:57

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.SlugField(editable=False, max_length=100, unique=True)),
                ('name', models.CharField(max_length=100)),
                ('image', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='House',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.CharField(max_length=100)),
                ('price', models.CharField(max_length=100)),
                ('country', models.CharField(max_length=100)),
                ('location', models.CharField(max_length=100)),
                ('address', models.CharField(max_length=100)),
                ('latitude', models.DecimalField(decimal_places=20, max_digits=30)),
                ('longitude', models.DecimalField(decimal_places=20, max_digits=30)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='category', to='houses.category')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='HouseServices',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rooms', models.IntegerField()),
                ('bathrooms', models.IntegerField()),
                ('pool', models.BooleanField(default=False)),
                ('wifi', models.BooleanField(default=False)),
                ('parking', models.BooleanField(default=False)),
                ('house', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='house_services', to='houses.house')),
            ],
        ),
    ]
