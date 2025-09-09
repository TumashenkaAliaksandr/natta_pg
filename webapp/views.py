from django.shortcuts import render, get_object_or_404

from webapp.models import Product


# Create your views here.

def index(request):
    """main page"""
    products = Product.objects.all()

    return render(request, 'webapp/index.html', {'products': products})


def about(request):
    """about page"""

    return render(request, 'webapp/about.html')


def contacts(request):
    """contacts page"""

    return render(request, 'webapp/contacts.html')


def products(request):
    """all products page"""

    return render(request, 'webapp/products.html')


def product_detail(request, slug):
    product = get_object_or_404(Product, slug=slug)

    return render(request, 'webapp/single_product.html', {'product': product})



def news(request):
    """All News page"""

    return render(request, 'webapp/news.html')
