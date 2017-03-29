from django.shortcuts import render, get_object_or_404
from django.shortcuts import redirect
from django.http import HttpResponseRedirect
from django.contrib.import auth
from django.core.context_process import csrf
from django.views.generic import TemplateView
from .models import Project
from django.utils import timezone
from .forms import ProjectForm
from django.contrib.auth.decorators import login_required


# Create your views here.
class HomePageView(TemplateView):
    def get(self, request):
        return render(request, 'index.html')


def project_list(request):
    projects = Project.objects.all()
    return render(request, 'project_list.html', {'projects': projects})


def project_detail(request, pk):
    project = get_object_or_404(Project, pk=pk)
    return render(request, 'project_detail.html', {'project': project})

@login_required
def project_new(request):
    if request.method == "POST":
        form = ProjectForm(request.POST)
        if form.is_valid():
            project = form.save(commit=False)
            project.project_owner = request.user
            project.created_date = timezone.now()
            project.save()
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
        form = ProjectForm(instance=project)
    return render(request, 'project_edit.html', {'form': form})

@login_required
def project_delete(request, pk):
    project = get_object_or_404(Project, pk=pk)
    project.delete()
    return redirect('project_list')

def login(request):
    c = {}
    c.update(csrf(request))
    return render('registration/login.html', c)

def auth_view(request):
    username = request.POST.get('username', '')
    password = request.POST.get('password', '')
    user = auth.authenticate(username=username, password=password)

    if user is not None:
        auth.login(request, user)
        return HttpResponseRedirect('/account/loggedin')
    else:
        return HttpResponseRedirect('/account/invalid')

