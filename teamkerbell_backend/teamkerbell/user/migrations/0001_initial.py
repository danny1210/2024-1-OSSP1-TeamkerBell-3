# Generated by Django 5.0.4 on 2024-05-18 08:11

import django.db.models.deletion
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("comp", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="LoginUser",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("password", models.CharField(max_length=128, verbose_name="password")),
                (
                    "last_login",
                    models.DateTimeField(
                        blank=True, null=True, verbose_name="last login"
                    ),
                ),
                ("email", models.EmailField(max_length=254, unique=True)),
                ("is_active", models.BooleanField(default=True)),
                ("is_staff", models.BooleanField(default=False)),
                ("is_superuser", models.BooleanField(default=False)),
                (
                    "date_joined",
                    models.DateTimeField(default=django.utils.timezone.now),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
        migrations.CreateModel(
            name="BasicUser",
            fields=[
                ("id", models.AutoField(primary_key=True, serialize=False)),
                ("password", models.CharField(max_length=50)),
                ("nickname", models.CharField(default="Anonymous", max_length=50)),
                ("phone", models.CharField(default="default_value", max_length=50)),
                ("email", models.CharField(default="default_value", max_length=50)),
                ("date", models.DateField(default=django.utils.timezone.now)),
                ("img", models.TextField(default="default_value")),
                ("score", models.FloatField(default=36.5)),
            ],
        ),
        migrations.CreateModel(
            name="Resume",
            fields=[
                ("id", models.AutoField(primary_key=True, serialize=False)),
                ("name", models.CharField(max_length=50)),
                ("email", models.CharField(max_length=50)),
                ("phone", models.CharField(max_length=50)),
                ("tier", models.CharField(max_length=50, null=True)),
                ("userIntro", models.CharField(max_length=500, null=True)),
                ("skill", models.CharField(max_length=500, null=True)),
                ("experience", models.CharField(max_length=500, null=True)),
                ("githubLink", models.CharField(max_length=100, null=True)),
                ("snsLink", models.CharField(max_length=200, null=True)),
                ("city", models.CharField(max_length=20, null=True)),
                ("dong", models.CharField(max_length=20, null=True)),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="resumes",
                        to="user.basicuser",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Rude",
            fields=[
                ("id", models.AutoField(primary_key=True, serialize=False)),
                ("rudeness", models.CharField(max_length=300, null=True)),
                ("isrude", models.BooleanField(null=True)),
                (
                    "reporter",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="reporters",
                        to="user.basicuser",
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="rudes",
                        to="user.basicuser",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Tag",
            fields=[
                ("id", models.AutoField(primary_key=True, serialize=False)),
                ("count", models.IntegerField(default=0)),
                ("num", models.IntegerField(default=0)),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="tags",
                        to="user.basicuser",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Bookmark",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "comp",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="comp.comp"
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="bookmarks",
                        to="user.basicuser",
                    ),
                ),
            ],
            options={
                "unique_together": {("user", "comp")},
            },
        ),
    ]