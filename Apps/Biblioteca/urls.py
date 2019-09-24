from django.urls import path
from .views import crearAutor,RegistroUsuario

urlpatterns=[
    path('crear_autor/', crearAutor,name='crear_autor'),
    path('registro_usuario/', RegistroUsuario,name='registro_usuario'),
]