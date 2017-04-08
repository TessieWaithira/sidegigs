from django.shortcuts import render, get_object_or_404
from django.shortcuts import redirect
from django.views.generic import TemplateView
from .models import Project
from django.utils import timezone
from .forms import ProjectForm
from .forms import RegistrationForm
from .forms import SubscribeForm
from django.contrib.auth.forms import UserChangeForm, PasswordChangeForm
from django.contrib.auth.decorators import login_required
from django.db.models import Q
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.contrib.auth import update_session_auth_hash
from django.contrib.auth.models import User
from django.contrib import messages
import sendgrid
import os
from sendgrid.helpers.mail import *


sg = sendgrid.SendGridAPIClient(apikey=os.environ.get('SENDGRID_API_KEY'))
from_email = Email("teresa.wambugu@meltwater.org")
to_email = Email("terrywaithira1@gmail.com")
subject = "Sending with SendGrid is Fun"
content = Content("text/plain", "and easy to do anywhere, even with Python")
mail = Mail(from_email, subject, to_email, content)
response = sg.client.mail.send.post(request_body=mail.get())
print(response.status_code)
print(response.body)
print(response.headers)

# Create your views here.
class HomePageView(TemplateView):
    def get(self, request):
        return render(request, 'project_list.html')


def project_list(request):
    projects = Project.objects.all()
    query = request.GET.get("q")
    if query:
        projects = projects.filter(Q(project_title__icontains=query) |
                                   Q(short_pitch__icontains=query)
                                   ).distinct()
    paginator = Paginator(projects, 5)
    page = request.GET.get('page')
    try:
        projects = paginator.page(page)
    except PageNotAnInteger:
        projects = paginator.page(1)
    except EmptyPage:
        projects = paginator.page(paginator.num_pages)
    return render(request, 'project_list.html', {'projects': projects})


def project_detail(request, pk):
    project = get_object_or_404(Project, pk=pk)
    return render(request, 'project_detail.html', {'project': project})


def project_apply(request, pk):
    project = get_object_or_404(Project, pk=pk)
    context = {'project': project}
    return render(request, 'project_apply.html', context)


def project_subscribe(request):
    if request.method == "POST":
        form = SubscribeForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('project_list')
    else:
        form = SubscribeForm()
    return render(request, 'project_apply.html', {'form': form})


@login_required
def project_new(request):
    if request.method == "POST":
        form = ProjectForm(request.POST)
        if form.is_valid():
            project = form.save(commit=False)
            project.project_owner = request.user
            project.created_date = timezone.now()
            project.save()

            messages.success(request, 'Post added successfully')
            return redirect('project_list')
    else:
        form = ProjectForm()
    return render(request, 'project_new.html', {'form': form})


@login_required
def project_edit(request, pk):
    project = get_object_or_404(Project, pk=pk)
    if request.method == "POST":
        form = ProjectForm(request.POST, instance=project)
        if form.is_valid():
            project = form.save(commit=False)
            project.project_owner = request.user
            project.created_date = timezone.now()
            project.save()
            return redirect('project_list')
    else:
        context = {'project': project}
    return render(request, 'project_edit.html', context)


@login_required
def project_delete(request, pk):
    project = get_object_or_404(Project, pk=pk)
    project.delete()
    return redirect('project_list')


def register(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('project_list')
    else:
        form = RegistrationForm()
    return render(request, 'registration/signup.html', {'form': form})
