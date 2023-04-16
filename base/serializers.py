from . import models
from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken

class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'isAdmin']
    
    def get_name(self, obj):
        name = obj.first_name
        return name
    
    def get_isAdmin(self, obj):
        return obj.is_staff

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True )
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)


class FreelanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Freelance
        fields = '__all__'

class HireSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Hire
        fields = '__all__'

class TutoringSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Tutoring
        fields = '__all__'

class ClicksSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Clicks
        fields = '__all__'