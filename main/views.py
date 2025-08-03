from django.shortcuts import render
from django.http import JsonResponse
from django.template.loader import render_to_string

def home(request):
    """Home page view with HTMX support"""
    if request.headers.get('HX-Request'):
        # Return only the content for HTMX requests
        return render(request, 'main/partials/home_content.html')
    return render(request, 'main/home.html')

def about(request):
    """About page view with HTMX support"""
    if request.headers.get('HX-Request'):
        return render(request, 'main/partials/about_content.html')
    return render(request, 'main/about.html')

def products(request):
    """Products page view with HTMX support"""
    # Sample product data for dynamic loading
    products_data = [
        {'id': 1, 'name': 'Product A', 'price': '$99', 'description': 'High quality product A'},
        {'id': 2, 'name': 'Product B', 'price': '$149', 'description': 'Amazing product B'},
        {'id': 3, 'name': 'Product C', 'price': '$199', 'description': 'Premium product C'},
    ]
    
    if request.headers.get('HX-Request'):
        return render(request, 'main/partials/products_content.html', {'products': products_data})
    return render(request, 'main/products.html', {'products': products_data})

def work(request):
    """Work page view with HTMX support"""
    if request.headers.get('HX-Request'):
        return render(request, 'main/partials/work_content.html')
    return render(request, 'main/work.html')

def pricing(request):
    """Pricing page view with HTMX support"""
    if request.headers.get('HX-Request'):
        return render(request, 'main/partials/pricing_content.html')
    return render(request, 'main/pricing.html')

def faq(request):
    """FAQ page view with HTMX support"""
    if request.headers.get('HX-Request'):
        return render(request, 'main/partials/faq_content.html')
    return render(request, 'main/faq.html')

def contact(request):
    """Contact page view with HTMX support and form handling"""
    if request.method == 'POST' and request.headers.get('HX-Request'):
        # Handle HTMX form submission
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        
        # In a real application, you would save this to database or send email
        # For demo purposes, we'll just return a success message
        
        success_html = '''
        <div class="alert alert-success" role="alert">
            <strong>Thank you, {}!</strong> Your message has been sent successfully.
        </div>
        '''.format(name)
        
        return render(request, 'main/partials/contact_form_response.html', {
            'success': True,
            'name': name,
            'email': email,
            'message': message
        })
    
    if request.headers.get('HX-Request'):
        return render(request, 'main/partials/contact_content.html')
    return render(request, 'main/contact.html')

def load_product_details(request, product_id):
    """Load product details dynamically via HTMX"""
    # Sample product details
    product_details = {
        1: {'name': 'Product A', 'price': '$99', 'description': 'Detailed description of Product A with all features and benefits.', 'image': 'img/product-a.jpg'},
        2: {'name': 'Product B', 'price': '$149', 'description': 'Detailed description of Product B with all features and benefits.', 'image': 'img/product-b.jpg'},
        3: {'name': 'Product C', 'price': '$199', 'description': 'Detailed description of Product C with all features and benefits.', 'image': 'img/product-c.jpg'},
    }
    
    product = product_details.get(product_id, {})
    return render(request, 'main/partials/product_details.html', {'product': product, 'product_id': product_id})
