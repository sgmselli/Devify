from django.urls import path
from . import views


urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/register/', views.registerUser, name='register'),
    path('users/', views.getUsers, name='users'),
    path('users/profile/', views.getUserProfile, name='profile'),
    path('users/update/', views.updateUser, name='update'),

    path('freelances/', views.getFreelances, name='getFreelances'),
    path('admin/freelance/create/', views.createFreelance, name='createFreelances'),
    path('admin/freelance/assign/<str:pk>', views.freelanceAssign, name='freelanceAssign'),
    path('admin/freelance/completed/<str:pk>', views.freelanceComplete, name='freelanceComplete'),
    path('freelances/apply/<str:pk>', views.freelanceApply, name='freelanceApply'),

    path('tutor/new/create/', views.newTutorClient, name='newTutor'),
    path('admin/tutor/bookings/', views.getTutorBookings, name='tutorBookings'),

    path('hire/create/', views.createHire, name='createHire'),
    path('admin/hire/get/', views.getHires, name='getHires'),
    path('click/', views.premiumClick, name='click'),

    path('stripe/create-checkout-session/<str:pk>', views.create_checkout_session),
]