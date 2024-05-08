# Generated by Django 5.0.4 on 2024-05-02 17:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Comp',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=225)),
                ('category', models.CharField(max_length=225)),
                ('startDate', models.DateField()),
                ('endDate', models.DateField()),
                ('organization', models.CharField(max_length=225)),
                ('eligibillty', models.CharField(max_length=225)),
                ('applicationMethod', models.CharField(max_length=225)),
                ('context', models.CharField(max_length=225)),
                ('reward', models.CharField(max_length=225)),
                ('contact', models.CharField(max_length=225)),
                ('link', models.CharField(max_length=225)),
                ('img', models.CharField(max_length=225)),
            ],
        ),
    ]
