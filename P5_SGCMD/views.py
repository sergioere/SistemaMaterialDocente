from os import name

from django.http import HttpResponse
import datetime

from django.shortcuts import render
from django.template import Template, Context
from django.template import loader
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import AbstractUser, Group
from django.contrib.auth.models import User
from gestUsuarios.utils import create_default_groups


@login_required
def index(request):
    create_default_groups()

    if request.user.groups.filter(name='Vicedecano Administración').count() > 0:
        return render(request, "rol-vicedecano.html")
    elif request.user.groups.filter(name='Administrador').count() > 0:
        return render(request, "rol-admin.html")
    else:
        pass


def ayuda(request):
    if request.user.groups.filter(name='Vicedecano Administración').count() > 0:
        return render(request, "ayuda-vice.html")
    elif request.user.groups.filter(name='Administrador').count() > 0:
        return render(request, "ayuda-admin.html")
    else:
        pass


def contactos(request):
    if request.user.groups.filter(name='Vicedecano Administración').count() > 0:
        return render(request, "contactos-vice.html")
    elif request.user.groups.filter(name='Administrador').count() > 0:
        return render(request, "contactos-admin.html")
    else:
        pass

# def admin(request):
# return render(request, "rol-admin.html")
