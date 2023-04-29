from django.shortcuts import render

# Create your views here.
class PHQ9List(generics.ListCreateAPIView):
    queryset = Card.objects.all().order_by('id')
    serializer_class = PHQ9FormSerializer

    class GAD7List(generics.ListCreateAPIView):
    queryset = Card.objects.all().order_by('id')
    serializer_class = GAD7FormSerializer