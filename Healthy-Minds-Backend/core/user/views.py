from django.shortcuts import render
from .serializers import GAD7FormSerializer
from .serializers import PHQ9FormSerializer

# Create your views here.
class PHQ9List(generics.ListCreateAPIView):
    queryset = answer.objects.all().order_by('answer')
    serializer_class = PHQ9FormSerializer 

    class GAD7List(generics.ListCreateAPIView):
    queryset = answer.objects.all().order_by('answer')
    serializer_class = GAD7FormSerializer