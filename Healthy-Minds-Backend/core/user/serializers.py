from core.user.models import User
from core.user.models import GAD7Form
from core.user.models import PHQ9Form
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_active']
        read_only_field = ['is_active']

class PHQ9FormSerializer(serializers.ModelSerializer):

    class Meta:
        model = PHQ9Form
        fields = ('answer1', 'answer2', 'answer3', 'answer4','answer5', 'answer6',   'answer7', 'answer8', 'answer9',  "Overallscore", "userId", "date")

class GAD7FormSerializer(serializers.ModelSerializer):

    class Meta:
        model = GAD7Form
        fields = ('answer1', 'answer2', 'answer3', 'answer4','answer5', 'answer6',   'answer7',"Overallscore", "userId", "date")