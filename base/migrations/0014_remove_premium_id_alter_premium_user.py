# Generated by Django 4.1.7 on 2023-05-05 21:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0013_remove_premium_monthdate'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='premium',
            name='id',
        ),
        migrations.AlterField(
            model_name='premium',
            name='user',
            field=models.CharField(max_length=100, primary_key=True, serialize=False),
        ),
    ]
