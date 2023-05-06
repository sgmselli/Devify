from django.db import models  
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
import json
import datetime 

class Clicks(models.Model):
    _id = models.AutoField(editable=False, primary_key=True)
    user = models.CharField(max_length=100, default=None )

    def __str__(self):
        return self.user

class Freelance(models.Model):
    _id = models.AutoField(editable=False, primary_key=True)
    user = models.CharField(max_length=100, default=None)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    price = models.DecimalField(decimal_places=2, max_digits=7)
    dueDate = models.CharField(max_length=15)
    client = models.CharField(max_length=100)
    completed = models.BooleanField(default=False)
    applications = models.CharField(max_length=200, default='')

    def set_foo(self, x):
        self.applications = json.dumps(x)

    def get_foo(self):
        return json.loads(self.applications)

    def __str__(self):
        return self.title

class Order(models.Model):
    _id = models.AutoField(editable=False, primary_key=True)
    name = models.CharField(max_length=100)
    user = models.CharField(max_length=100)
    date = models.DateField()
    cost = models.DecimalField(decimal_places=2, max_digits=7)
    payementType = models.CharField(max_length=100, default=None)

    def __str__(self):
        return self.name


class Premium(models.Model):
    user = models.CharField(max_length=100, primary_key=True)

class Hire(models.Model):
    name = models.CharField(max_length=100, default=None)
    email = models.CharField(max_length=100, default=None)
    tele = models.CharField(max_length=15, default=None)
    completeBy = models.DateField()
    title = models.CharField(max_length=150, default=None)
    details = models.CharField(max_length=1000, default=None)

    def __str__(self):
        return self.name

class Tutoring(models.Model):
    name = models.CharField(max_length=100, default=None)
    email = models.CharField(max_length=100, default=None)
    tele = models.CharField(max_length=15, default=None)
    sessionsPW = models.IntegerField()
    course = models.CharField(max_length=100, default=None)

    def __str__(self):
        return self.name

class TutorBooking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    day = models.DateField(default=datetime.datetime.now)
    time = models.CharField(max_length=10)
