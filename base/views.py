from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User

from . import serializers
from .models import Freelance, Hire, Tutoring, Clicks, Premium

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import status
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

@api_view(['GET'])
def getPremiumAccounts(request):
    premium_accounts = Premium.objects.all()
    serializer = serializers.PremiumSerializer(premium_accounts, many=True)
    return Response(serializer.data)

#Payements
import stripe
import os

# This is your test secret API key.
stripe.api_key = os.getenv('STRIPE_KEY', '')
endpoint_secret = os.getenv('WEBHOOK_KEY' '') 

@api_view(['POST'])
def create_checkout_session(request, pk):

    product = pk[pk.index('$')+1:]
    email = pk[:pk.index('$')]
    print(product)

    try:
        checkout_session = stripe.checkout.Session.create(
            line_items=[
                {
                    # Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    'price': product,
                    'quantity': 1,
                },
            ],
            mode='subscription',
            customer_email= email,
            success_url='https://devifyuk.herokuapp.com/' + '?success=true&session_id={CHECKOUT_SESSION_ID}',
            cancel_url='https://devifyuk.herokuapp.com/' + '?canceled=true',
            automatic_tax={'enabled': True},
        )

        return redirect(checkout_session.url)
    
    except:
        return Response({
            'error':'payement failed'
            })

@csrf_exempt
def stripe_webhook(request):
  payload = request.body
  sig_header = request.META['HTTP_STRIPE_SIGNATURE']
  event = None

  print(payload)

  try:
    event = stripe.Webhook.construct_event(
      payload, sig_header, endpoint_secret
    )

  except ValueError as e:
    # Invalid payload
    return HttpResponse(status=400)
  except stripe.error.SignatureVerificationError as e:
    # Invalid signature
    return HttpResponse(status=400)

  # Handle the checkout.session.completed event
  if event['type'] == 'checkout.session.completed':
    # Retrieve the session. If you require line items in the response, you may include them by expanding line_items.
    session = stripe.checkout.Session.retrieve(
      event['data']['object']['id'],
      expand=['line_items'],
    )
    
    create_premium(session['customer_details']['email'])

  return HttpResponse(status=200)

def create_premium(user):
    premium = Premium.objects.create(
        user = user
    )
    serializer = serializers.PremiumSerializer(premium, many=False)
    return Response(serializer.data)

