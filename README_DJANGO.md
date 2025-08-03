# Django + HTMX SPA Migration

This project has been successfully migrated from a static HTML website to a Django-based Single Page Application (SPA) using HTMX for interactivity and partial updates.

## Project Structure

```
vendor_site/
├── manage.py
├── vendor_site/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
├── main/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── tests.py
│   ├── views.py
│   └── urls.py
├── templates/
│   ├── base.html
│   └── main/
│       ├── *.html (page templates)
│       └── partials/
│           └── *_content.html (HTMX partials)
├── static/
│   ├── css/
│   ├── js/
│   ├── img/
│   └── vendor/
└── requirements.txt
```

## Features Implemented

### 1. Django Project Setup
- Django project `vendor_site` with app `main`
- Configured settings for static files and templates
- URL routing for all pages

### 2. HTMX Integration
- **Base Template**: `base.html` with HTMX library and configuration
- **SPA Navigation**: All navigation links use HTMX for content swapping
- **Partial Templates**: Separate content templates for HTMX responses
- **Dynamic Loading**: Product details modal with HTMX
- **Form Handling**: Contact form with HTMX submission

### 3. Template Structure
- **Template Inheritance**: Uses Django's template inheritance with `base.html`
- **Static Files**: Properly organized CSS, JS, images, and vendor libraries
- **Responsive Design**: Maintains original Bootstrap 3.3.4 styling

### 4. Page Templates
- **Home** (`/`): Landing page with services showcase
- **About** (`/about/`): Company information and team
- **Products** (`/products/`): Product listing with dynamic details
- **Work** (`/work/`): Portfolio showcase
- **Pricing** (`/pricing/`): Pricing plans with styled cards
- **FAQ** (`/faq/`): Accordion-style frequently asked questions
- **Contact** (`/contact/`): Contact form with HTMX submission

### 5. HTMX Features

#### SPA Navigation
- Navigation links use `hx-get`, `hx-target="#main-content"`, and `hx-push-url="true"`
- Content loads into main container without page refresh
- Browser history and URLs are maintained

#### Dynamic Content Loading
- Product details modal loads via HTMX
- "Load More Products" button for pagination
- Real-time form submission and responses

#### JavaScript Integration
- HTMX configuration for CSRF tokens
- Component re-initialization after content swaps
- WOW animations and Swiper carousel re-initialization

## Development Setup

### Prerequisites
- Python 3.8+
- pip

### Installation
```bash
# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start development server
python manage.py runserver
```

### Static Files in Development
Static files are served automatically in development mode via Django's built-in static file serving.

## HTMX Usage Patterns

### 1. Navigation Links
```html
<a href="{% url 'main:about' %}"
   hx-get="{% url 'main:about' %}"
   hx-target="#main-content"
   hx-push-url="true">About</a>
```

### 2. Form Submission
```html
<form hx-post="{% url 'main:contact' %}"
      hx-target="#form-response"
      hx-swap="innerHTML">
    {% csrf_token %}
    <!-- form fields -->
</form>
```

### 3. Dynamic Content Loading
```html
<button hx-get="{% url 'main:product_details' product.id %}"
        hx-target="#product-details-modal"
        hx-trigger="click">
    View Details
</button>
```

## Views Pattern

Each view supports both full page loads and HTMX partial loading:

```python
def home(request):
    if request.headers.get('HX-Request'):
        # Return only content for HTMX requests
        return render(request, 'main/partials/home_content.html')
    # Return full page for direct access
    return render(request, 'main/home.html')
```

## Benefits of This Migration

1. **SPA Experience**: Fast navigation without page reloads
2. **SEO Friendly**: Full page templates work for direct access and search engines
3. **Progressive Enhancement**: Works with and without JavaScript
4. **Maintainable**: Clean separation of concerns with Django patterns
5. **Scalable**: Easy to add new pages and HTMX interactions

## Deployment Considerations

### Production Settings
- Set `DEBUG = False`
- Configure `ALLOWED_HOSTS`
- Set up proper static file serving (nginx, whitenoise, etc.)
- Configure database (PostgreSQL recommended)

### Static Files
```python
# settings.py for production
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_STORAGE = 'django.contrib.staticfiles.storage.StaticFilesStorage'
```

### Security
- Update `SECRET_KEY` for production
- Configure CSRF settings if needed
- Set up HTTPS
- Configure security headers

## Future Enhancements

1. **Database Models**: Add models for products, testimonials, etc.
2. **Admin Interface**: Set up Django admin for content management
3. **User Authentication**: Add user registration and login
4. **API Integration**: Create REST API endpoints for mobile apps
5. **Caching**: Implement Redis/Memcached for better performance
6. **Search**: Add search functionality with HTMX
7. **Internationalization**: Add multi-language support

## Technologies Used

- **Django 5.2.4**: Web framework
- **HTMX 1.9.10**: Frontend interactivity
- **Bootstrap 3.3.4**: CSS framework (from original template)
- **jQuery**: JavaScript library (from original template)
- **Swiper**: Carousel/slider component
- **WOW.js**: Scroll animations

## Browser Support

The application supports all modern browsers that support:
- HTML5
- CSS3
- JavaScript ES5+
- XMLHttpRequest (for HTMX)