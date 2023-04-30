from django.shortcuts import render
from .serializers import GAD7FormSerializer
from .serializers import PHQ9FormSerializer
from .models import GAD7Form
from .models import PHQ9Form
from rest_framework import generics

# Create your views here.
class PHQ9List(generics.ListCreateAPIView):
    queryset = PHQ9Form.objects.all().order_by('id')
    serializer_class = PHQ9FormSerializer 

class GAD7List(generics.ListCreateAPIView):
    queryset = GAD7Form.objects.all().order_by('id')
    serializer_class = GAD7FormSerializer