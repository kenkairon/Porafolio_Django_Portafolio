from django.urls import path
from .views import reporte_ventas_mensuales

urlpatterns = [
    path('reporte-ventas/', reporte_ventas_mensuales, name='reporte_ventas'),
]