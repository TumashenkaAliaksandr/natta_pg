from django.contrib import admin
from .models import Product, ProductPhoto

class ProductPhotoInline(admin.TabularInline):
    model = Product.additional_photos.through
    extra = 1

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'release_date', 'weight', 'size', 'color')
    inlines = [ProductPhotoInline]

@admin.register(ProductPhoto)
class ProductPhotoAdmin(admin.ModelAdmin):
    list_display = ('id', 'photo')
