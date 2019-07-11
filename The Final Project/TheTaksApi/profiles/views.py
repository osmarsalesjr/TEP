from django.shortcuts import render
from rest_framework import viewsets
from profiles.models import Profile
from profiles.serializers import ProfileSerializer


class ProfilesList(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    name = 'profiles-list'


# class ProfileDetail(viewsets.ModelViewSet):
#     queryset = Profile.objects.all()
#     serializer_class = ProfileSerializer
#     name = 'profile-detail'
