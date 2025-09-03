from django.shortcuts import render

# Create your views here.

def index(request):
    """main page"""

    return render(request, 'webapp/index.html')


def about(request):
    """about page"""

    return render(request, 'webapp/about.html')


def contacts(request):
    """contacts page"""

    return render(request, 'webapp/contacts.html')


def products(request):
    """all products page"""

    return render(request, 'webapp/products.html')


def news(request):
    """All News page"""

    return render(request, 'webapp/news.html')
