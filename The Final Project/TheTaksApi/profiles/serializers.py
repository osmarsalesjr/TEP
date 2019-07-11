from rest_framework import serializers
from profiles.models import Profile


class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.RelatedField(many=False)

    class Meta:
        model = Profile
        fields = ('user', 'name', 'birthday')
