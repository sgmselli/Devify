from django.urls import path
from . import views


urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view()),
    path('users/register/', views.registerUser),
    path('users/', views.getUsers),
    path('users/profile/', views.getUserProfile),
    path('users/update/', views.updateUser),
    path('users/premium/', views.getPremiumAccounts),

    path('freelances/', views.getFreelances),
    path('admin/freelance/create/', views.createFreelance),
    path('admin/freelance/assign/<str:pk>', views.freelanceAssign),
    path('admin/freelance/completed/<str:pk>', views.freelanceComplete),
    path('freelances/apply/<str:pk>', views.freelanceApply),

    path('tutor/new/create/', views.newTutorClient),
    path('admin/tutor/bookings/', views.getTutorBookings),

    path('hire/create/', views.createHire),
    path('admin/hire/get/', views.getHires),
    path('click/', views.premiumClick),

    path('stripe/create-checkout-session/<str:pk>', views.create_checkout_session),
    path('stripe_webhook/', views.stripe_webhook),
]