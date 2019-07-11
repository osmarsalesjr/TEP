from rest_framework import serializers
from profiles.models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('pk', 'user', 'name', 'birthday')
