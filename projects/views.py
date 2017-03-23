from django.shortcuts import render
from django.shortcuts import redirect
from django.views.generic import TemplateView
from .models import Project
from django.utils import timezone
from .forms import ProjectForm
# Create your views here.
class HomePageView(TemplateView):
    def get(self, request):
        return render(request, 'index.html')

def project_list(request):
    projects = Project.objects.filter(created_date__lte=timezone.now()).order_by('created_date')
    return render(request, 'project_list.html', {'projects': projects})

def project_new(request):
    form = ProjectForm()
    return render(request, 'project_new.html', {'form': form})

