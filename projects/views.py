from django.shortcuts import render, get_object_or_404
from django.shortcuts import redirect
from django.views.generic import TemplateView
from .models import Project
from django.utils import timezone
from .forms import ProjectForm
from .forms import RegistrationForm
from django.contrib.auth.decorators import login_required
from django.db.models import Q
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.contrib.auth.forms import UserCreationForm


# Create your views here.
class HomePageView(TemplateView):
    def get(self, request):
        return render(request, 'index.html')


def project_list(request):
    projects = Project.objects.all()
    query = request.GET.get("q")
    if query:
        projects = projects.filter(Q(project_title__icontains=query) |
                                   Q(short_pitch__icontains=query)
                                   ).distinct()
    paginator = Paginator(projects, 2)

    page = request.GET.get('page')
    try:
        projects = paginator.page(page)
    except PageNotAnInteger:
        # If page is not an integer, deliver first page.
        projects = paginator.page(1)
    except EmptyPage:
        # If page is out of range (e.g. 9999), deliver last page of results.
        projects = paginator.page(paginator.num_pages)

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


def register(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('project_list')
    else:
        form = RegistrationForm()
    return render(request, 'registration/account.html', {'form': form})



