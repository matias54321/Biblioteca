from django import forms
from .models import Autor

class AutorForm(forms.ModelForm):
    class Meta:
        model = Autor
        fields=['primer_nombre','apellido','nacimiento','muerte']