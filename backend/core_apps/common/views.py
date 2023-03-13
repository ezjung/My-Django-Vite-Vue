from django.shortcuts import render

def home_view(request):
    return render(request, 'pages/home.html', {})

def index_view(request):

    context = {
        "django_message": "Hello from Django!",
        "vue_message": "This message has been passed to a Vue component from a Django view.",
        "initial_value": 1000
    }

    return render(request, "index.html", context)