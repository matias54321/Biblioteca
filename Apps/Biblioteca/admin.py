from django.contrib import admin
from .models import Autor, Genero, Libro

# Register your models here.
admin.site.register(Autor)
admin.site.register(Genero)
admin.site.register(Libro)

