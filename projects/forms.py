from django import forms
from .models import Project
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm, UserChangeForm




class ProjectForm(forms.ModelForm):
    class Meta:
        model = Project
        fields = ('project_title', 'short_pitch')


class RegistrationForm(UserCreationForm):
    email = forms.EmailField(required=True)

    class Meta:
        model = User
        fields = (
            'username',
            'email',
            'password1',
            'password2'
        )

    def save(self, commit=True):
        user = super(RegistrationForm, self).save(commit=False)
        user.email = self.cleaned_data['email']

        if commit:
            user.save()
        return user
