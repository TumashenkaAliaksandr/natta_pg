from django.db import models

class Product(models.Model):
    name = models.CharField("Название", max_length=200)
    main_photo = models.ImageField("Главное фото", upload_to="products/main/")
    description = models.TextField("Описание", blank=True)
    price = models.DecimalField("Цена", max_digits=10, decimal_places=2)
    attributes = models.TextField("Атрибуты", blank=True, help_text="Краткое описание атрибутов")
    weight = models.FloatField("Вес (кг)", blank=True, null=True)
    size = models.CharField("Размер", max_length=100, blank=True)
    color = models.CharField("Цвет", max_length=100, blank=True)
    additional_photos = models.ManyToManyField('ProductPhoto', verbose_name="Дополнительные фото", blank=True)

    class Meta:
        verbose_name = "Товар"
        verbose_name_plural = "Товары"
        ordering = ['name']

    def __str__(self):
        return self.name

class ProductPhoto(models.Model):
    photo = models.ImageField("Фото", upload_to="products/additional/")

    class Meta:
        verbose_name = "Дополнительное фото"
        verbose_name_plural = "Дополнительные фото"

    def __str__(self):
        return f"Фото #{self.pk}"
