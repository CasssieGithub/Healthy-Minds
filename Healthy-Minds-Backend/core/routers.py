from rest_framework.routers import SimpleRouter
from core.user.viewsets import UserViewSet
from core.auth.viewsets import LoginViewSet, RegistrationViewSet, RefreshViewSet


routes = SimpleRouter()

# AUTHENTICATION
routes.register(r'auth/login', LoginViewSet, basename='auth-login')
routes.register(r'auth/register', RegistrationViewSet, basename='auth-register')
routes.register(r'auth/refresh', RefreshViewSet, basename='auth-refresh')

# USER
routes.register(r'user', UserViewSet, basename='user')

# #FORM
# routes.register(r'GAD7Form', GAD7List.as_view(), basename='GAD7Form' )
# routes.register(r'PHQ9Form', PHQ9List.as_view(), basename='PHQ9Form' )


urlpatterns = [
    *routes.urls
]