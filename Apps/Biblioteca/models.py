from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Autor(models.Model):
    id= models.AutoField(primary_key=True)
    primer_nombre = models.CharField(max_length=100, blank=False, null=False)
    apellido = models.CharField(max_length=100, blank=False, null=False)
    nacimiento = models.DateField(blank=True, null=False)
    muerte = models.DateField('Fallecimiento', null=True, blank=True)

    def __str__(self):
        return '%s, %s' % (self.apellido, self.primer_nombre)

class Genero(models.Model):
    nombre = models.CharField(max_length=200, help_text="Ingrese el nombre del género (p. ej. Ciencia Ficción, Poesía Francesa etc.)")
    
    def __str__(self):
        return self.nombre

class Libro(models.Model):
    titulo=models.CharField('Titulo', max_length=100)
    resumen=models.TextField(max_length=2000, help_text="Ingrese el resumen del libro")
    autor=models.ManyToManyField(Autor)
    isbn=models.CharField('ISBN', max_length=13, help_text='13 Caracteres <a href="https://www.isbn-international.org/content/what-isbn">ISBN number</a>')
    genero = models.ManyToManyField(Genero, help_text="Seleccione un genero para este libro")
    fech_salida=models.DateField('Fecha de publicación', null=True, blank=True)
    puntuacion=models.FloatField()

    def __str__(self):
        return self.titulo

#class InstanciaLibro(models.Model):
    