from django.urls import path
from . import views

app_name = 'main'

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('products/', views.products, name='products'),
    path('work/', views.work, name='work'),
    path('pricing/', views.pricing, name='pricing'),
    path('faq/', views.faq, name='faq'),
    path('contact/', views.contact, name='contact'),
    path('product/<int:product_id>/', views.load_product_details, name='product_details'),
]