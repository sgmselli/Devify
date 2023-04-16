from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from . import serializers
from .models import Freelance, Hire, Tutoring, Clicks


from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = serializers.UserSerializerWithToken(self.user).data

        for k,v in serializer.items():
            data[k] = v

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['POST'])
def registerUser(request):
    data = request.data

    try:
        user = User.objects.create(
            first_name = data['name'],
            username = data['email'],
            password = make_password(data['password'])
        )
        serializer = serializers.UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    
    except:
        message = {'detail': 'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['PUT'])
def updateUser(request):
    user = request.user
    serializer = serializers.UserSerializerWithToken(user, many=False)

    data = request.data
    user.first_name = data['name']
    user.username = data['email']
    user.email = data['email']

    if data['password'] != '':
        user.password = make_password(data['password'])
    
    user.save()

    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = serializers.UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = serializers.UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getFreelances(request):
    freelances = Freelance.objects.all()
    serializer = serializers.FreelanceSerializer(freelances, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def createFreelance(request):
    data = request.data

    freelance = Freelance.objects.create(
        user = data['user'],
        title = data['title'],
        description = data['title'],
        price = data['price'],
        dueDate = data['dueDate'],
        client = data['client'],
        completed = data['completed'],
    )

    serializer = serializers.FreelanceSerializer(freelance, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def freelanceComplete(request, pk):
    freelance = Freelance.objects.get(pk=pk)
    data = request.data
    serializer = serializers.FreelanceSerializer(freelance, many=False)
    freelance.completed = data['completed']
    freelance.save()
    return Response(serializer.data)

@api_view(['PUT'])
def freelanceAssign(request, pk):
    freelance = Freelance.objects.get(pk=pk)
    data = request.data
    serializer = serializers.FreelanceSerializer(freelance, many=False)
    freelance.user = data['user']
    freelance.save()
    return Response(serializer.data)

@api_view(['PUT'])
def freelanceApply(request, pk):
    freelance = Freelance.objects.get(pk=pk)
    data = request.data
    serializer = serializers.FreelanceSerializer(freelance, many=False)
    freelance.applications += data['application']+", "
    freelance.save()
    return Response(serializer.data)

@api_view(['GET'])
def getHires(request):
    hire = Hire.objects.all()
    serializer = serializers.HireSerializer(hire, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def createHire(request):
    data = request.data

    hire = Hire.objects.create(
        name = data['name'],
        email = data['email'],
        tele = data['tele'],
        completeBy = data['completeBy'],
        title = data['title'],
        details = data['details']
    )

    serializer = serializers.HireSerializer(hire, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def newTutorClient(request):
    data = request.data

    hire = Tutoring.objects.create(
        name = data['name'],
        email = data['email'],
        tele = data['tele'],
        sessionsPW = data['sessionsPW'],
        course = data['course']
    )

    serializer = serializers.TutoringSerializer(hire, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getTutorBookings(request):
    bookings = Tutoring.objects.all()
    serializer = serializers.TutoringSerializer(bookings, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def premiumClick(request):
    data = request.data

    click = Clicks.objects.create(
        user = data['user']
    )

    serializer = serializers.ClicksSerializer(click, many=False)
    return Response(serializer.data)