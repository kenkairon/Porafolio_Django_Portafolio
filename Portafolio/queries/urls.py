from django.urls import path
from .views import reporte_ventas_mensuales,reporte_ventas_mensuales_json

urlpatterns = [
    path('reporte-ventas/', reporte_ventas_mensuales, name='reporte_ventas'),
    path('estadisticas4/',reporte_ventas_mensuales_json, name='estadisticas4'),
]
