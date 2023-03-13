from django.urls import path
from core_apps.common.views import home_view, index_view


urlpatterns = [
    path('', home_view, name='home-view'),
    path('index/', index_view, name='index-view'),
]