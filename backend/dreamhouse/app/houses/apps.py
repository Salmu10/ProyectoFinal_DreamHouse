from django.apps import AppConfig

class HousesConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'dreamhouse.app.houses'

    def ready(self):
        import dreamhouse.app.houses.signals