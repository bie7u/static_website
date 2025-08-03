<template>
  <LayoutComponent>
    <!-- Carousel Section -->
    <div class="carousel-section">
      <div class="carousel slide" data-ride="carousel">
        <div class="container">
          <!-- Indicators -->
          <ol class="carousel-indicators">
            <li v-for="(slide, index) in carouselSlides" 
                :key="index"
                :class="{ active: currentSlide === index }"
                @click="setCurrentSlide(index)"></li>
          </ol>
        </div>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
          <div v-for="(slide, index) in carouselSlides" 
               :key="index"
               class="item"
               :class="{ active: currentSlide === index }">
            <img class="img-responsive" :src="slide.image" :alt="slide.alt">
            <div class="container">
              <div class="carousel-centered">
                <div class="margin-b-40">
                  <h1 class="carousel-title">{{ slide.title }}</h1>
                  <p>{{ slide.description }}</p>
                </div>
                <a href="#" class="btn-theme btn-theme-sm btn-white-brd text-uppercase">{{ slide.buttonText }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Service Section -->
    <div class="bg-color-sky-light" data-auto-height="true">
      <div class="content-lg container">
        <div class="row row-space-1 margin-b-2">
          <div class="col-sm-4 sm-margin-b-2" v-for="(service, index) in services.slice(0, 3)" :key="index">
            <div class="wow fadeInLeft" :data-wow-duration="'.3'" :data-wow-delay="`.${index + 1}s`">
              <div class="service" data-height="height">
                <div class="service-element">
                  <i :class="`service-icon ${service.icon}`"></i>
                </div>
                <div class="service-info">
                  <h3>{{ service.title }}</h3>
                  <p class="margin-b-5">{{ service.description }}</p>
                </div>
                <a href="#" class="content-wrapper-link"></a>    
              </div>
            </div>
          </div>
        </div>

        <div class="row row-space-1">
          <div class="col-sm-4 sm-margin-b-2" v-for="(service, index) in services.slice(3, 6)" :key="index + 3">
            <div class="wow fadeInLeft" :data-wow-duration="'.3'" :data-wow-delay="`.${index + 4}s`">
              <div class="service" data-height="height">
                <div class="service-element">
                  <i :class="`service-icon ${service.icon}`"></i>
                </div>
                <div class="service-info">
                  <h3>{{ service.title }}</h3>
                  <p class="margin-b-5">{{ service.description }}</p>
                </div>
                <a href="#" class="content-wrapper-link"></a>    
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Latest Products Section -->
    <div class="content-lg container">
      <div class="row margin-b-40">
        <div class="col-sm-6">
          <h2>Latest Products</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua enim minim veniam exercitation</p>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-4 sm-margin-b-50" v-for="(product, index) in latestProducts" :key="index">
          <div class="margin-b-20">
            <div class="wow zoomIn" :data-wow-duration="'.3'" :data-wow-delay="`.1s`">
              <img class="img-responsive" :src="product.image" :alt="product.alt">
            </div>
          </div>
          <h4>
            <a href="#">{{ product.title }}</a> 
            <span class="text-uppercase margin-l-20">{{ product.category }}</span>
          </h4>
          <p>{{ product.description }}</p>
          <a class="link" href="#">Read More</a>
        </div>
      </div>
    </div>

    <!-- Clients Section -->
    <div class="bg-color-sky-light">
      <div class="content-lg container">
        <div class="swiper-clients-container">
          <div class="swiper-wrapper">
            <div v-for="(client, index) in clients" :key="index" class="swiper-slide">
              <img class="swiper-clients-img" :src="client.logo" :alt="client.name">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonials Section -->
    <div class="content-lg container">
      <div class="row">
        <div class="col-sm-9">
          <h2>Customer Reviews</h2>
          <div class="testimonials-container">
            <div v-for="(testimonial, index) in testimonials" 
                 :key="index" 
                 v-show="currentTestimonial === index"
                 class="testimonial-slide">
              <blockquote class="blockquote">
                <div class="margin-b-20" v-for="paragraph in testimonial.content" :key="paragraph">
                  {{ paragraph }}
                </div>
                <p><span class="fweight-700 color-link">{{ testimonial.author }}</span>, {{ testimonial.role }}</p>
              </blockquote>
            </div>
            
            <!-- Navigation dots -->
            <div class="testimonial-pagination">
              <span v-for="(testimonial, index) in testimonials" 
                    :key="index"
                    :class="{ active: currentTestimonial === index }"
                    @click="setCurrentTestimonial(index)"
                    class="pagination-dot"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pricing Section -->
    <div class="bg-color-sky-light">
      <div class="content-lg container">
        <div class="row row-space-1">
          <div class="col-sm-4 sm-margin-b-2" v-for="(plan, index) in pricingPlans" :key="index">
            <div class="pricing" :class="{ 'pricing-active': plan.featured }">
              <div class="margin-b-30">
                <i :class="`pricing-icon ${plan.icon}`"></i>
                <h3>{{ plan.name }} <span> - $</span> {{ plan.price }}</h3>
                <p>{{ plan.description }}</p>
              </div>
              <ul class="list-unstyled pricing-list margin-b-50">
                <li class="pricing-list-item" v-for="feature in plan.features" :key="feature">{{ feature }}</li>
              </ul>
              <router-link to="/pricing" class="btn-theme btn-theme-sm btn-default-bg text-uppercase">Choose</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Promo Section -->
    <div class="promo-section overflow-h">
      <div class="container">
        <div class="clearfix">
          <div class="ver-center">
            <div class="ver-center-aligned">
              <div class="promo-section-col">
                <h2>Our Clients</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua enim minim veniam exercitation ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua enim minim veniam exercitation</p>
                <p>Ipsum dolor sit amet consectetur adipiscing elit sed tempor incididut ut sead laboret dolore magna aliqua enim minim veniam exercitation ipsum dolor sit amet consectetur adipiscing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="promo-section-img-right">
        <img class="img-responsive" :src="promoImage" alt="Content Image">
      </div>
    </div>
  </LayoutComponent>
</template>

<script>
import LayoutComponent from '@/components/LayoutComponent.vue'

// Import images
import slide1 from '@/assets/images/1920x1080/01.jpg'
import slide2 from '@/assets/images/1920x1080/02.jpg'
import product1 from '@/assets/images/970x647/01.jpg'
import product2 from '@/assets/images/970x647/02.jpg'
import product3 from '@/assets/images/970x647/03.jpg'
import client1 from '@/assets/images/clients/01.png'
import client2 from '@/assets/images/clients/02.png'
import client3 from '@/assets/images/clients/03.png'
import client4 from '@/assets/images/clients/04.png'
import client5 from '@/assets/images/clients/05.png'
import client6 from '@/assets/images/clients/06.png'
import promo from '@/assets/images/970x970/01.jpg'

export default {
  name: 'HomeView',
  components: {
    LayoutComponent
  },
  data() {
    return {
      currentSlide: 0,
      currentTestimonial: 0,
      promoImage: promo,
      carouselSlides: [
        {
          image: slide1,
          alt: 'Slider Image',
          title: 'Hi-Tech Design',
          description: 'Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua enim minim estudiat veniam siad venumus dolore',
          buttonText: 'Explore'
        },
        {
          image: slide2,
          alt: 'Slider Image',
          title: 'Hi-Tech Design',
          description: 'Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua enim minim estudiat veniam siad venumus dolore',
          buttonText: 'Explore'
        }
      ],
      services: [
        {
          icon: 'icon-chemistry',
          title: 'Art Of Coding',
          description: 'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor'
        },
        {
          icon: 'icon-screen-tablet',
          title: 'Responsive Design',
          description: 'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor'
        },
        {
          icon: 'icon-badge',
          title: 'Feature Reach',
          description: 'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor'
        },
        {
          icon: 'icon-notebook',
          title: 'Useful Documentation',
          description: 'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor'
        },
        {
          icon: 'icon-speedometer',
          title: 'Fast Delivery',
          description: 'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor'
        },
        {
          icon: 'icon-badge',
          title: 'Free Plugins',
          description: 'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor'
        }
      ],
      latestProducts: [
        {
          image: product1,
          alt: 'Latest Products Image',
          title: 'Triangle Roof',
          category: 'Management',
          description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
        },
        {
          image: product2,
          alt: 'Latest Products Image',
          title: 'Curved Corners',
          category: 'Development',
          description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
        },
        {
          image: product3,
          alt: 'Latest Products Image',
          title: 'Bird On Green',
          category: 'Design',
          description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
        }
      ],
      clients: [
        { name: 'Client 1', logo: client1 },
        { name: 'Client 2', logo: client2 },
        { name: 'Client 3', logo: client3 },
        { name: 'Client 4', logo: client4 },
        { name: 'Client 5', logo: client5 },
        { name: 'Client 6', logo: client6 }
      ],
      testimonials: [
        {
          content: [
            'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua. Ut enim minim veniam exercitation laboris ut siad consequat siad minim enum esqudiat dolore.',
            'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret tempor incididunt dolore magna consequat siad minim aliqua.'
          ],
          author: 'Joh Milner',
          role: 'Metronic Customer'
        },
        {
          content: [
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          ],
          author: 'Alex Clarson',
          role: 'Metronic Customer'
        }
      ],
      pricingPlans: [
        {
          icon: 'icon-chemistry',
          name: 'Starter Kit',
          price: 49,
          description: 'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor',
          features: ['Basic Features', 'Up to 5 products', '50 Users Panels'],
          featured: false
        },
        {
          icon: 'icon-badge',
          name: 'Professional',
          price: 149,
          description: 'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor',
          features: ['Basic Features', 'Up to 100 products', '100 Users Panels'],
          featured: true
        },
        {
          icon: 'icon-shield',
          name: 'Advanced',
          price: 249,
          description: 'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor',
          features: ['Extended Features', 'Unlimited products', 'Unlimited Users Panels'],
          featured: false
        }
      ]
    }
  },
  methods: {
    setCurrentSlide(index) {
      this.currentSlide = index
    },
    setCurrentTestimonial(index) {
      this.currentTestimonial = index
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.carouselSlides.length
    },
    nextTestimonial() {
      this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length
    }
  },
  mounted() {
    // Auto-rotate carousel
    setInterval(this.nextSlide, 5000)
    
    // Auto-rotate testimonials
    setInterval(this.nextTestimonial, 7000)
  }
}
</script>

<style scoped>
/* Home page specific styles */
.carousel-section {
  position: relative;
  height: 500px;
  overflow: hidden;
}

.carousel {
  height: 100%;
}

.carousel-inner {
  height: 100%;
}

.carousel-inner .item {
  display: none;
  position: relative;
  height: 100%;
}

.carousel-inner .item.active {
  display: block;
}

.carousel-inner .item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 2;
}

.carousel-title {
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 20px;
}

.btn-theme {
  background-color: #72c02c;
  color: white;
  padding: 12px 30px;
  border: 2px solid white;
  border-radius: 3px;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
}

.btn-theme:hover {
  background-color: white;
  color: #72c02c;
  text-decoration: none;
}

.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 15;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.carousel-indicators li {
  width: 12px;
  height: 12px;
  margin: 0 5px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.carousel-indicators .active {
  background-color: #fff;
}

/* Services section */
.bg-color-sky-light {
  background-color: #f8f9fa;
  padding: 80px 0;
}

.content-lg {
  padding: 80px 0;
}

.service {
  text-align: center;
  padding: 30px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  height: 100%;
  transition: transform 0.3s ease;
  position: relative;
}

.service:hover {
  transform: translateY(-5px);
}

.service-element {
  margin-bottom: 20px;
}

.service-icon {
  font-size: 48px;
  color: #72c02c;
}

.content-wrapper-link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

/* Grid system */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}

.col-sm-4 {
  flex: 0 0 33.333333%;
  padding: 0 15px;
  margin-bottom: 30px;
}

.col-sm-6 {
  flex: 0 0 50%;
  padding: 0 15px;
}

.col-sm-8 {
  flex: 0 0 66.666667%;
  padding: 0 15px;
}

.col-sm-9 {
  flex: 0 0 75%;
  padding: 0 15px;
}

.col-sm-12 {
  flex: 0 0 100%;
  padding: 0 15px;
}

.img-responsive {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.margin-b-40 {
  margin-bottom: 40px;
}

.margin-b-20 {
  margin-bottom: 20px;
}

.margin-b-2 {
  margin-bottom: 2rem;
}

.sm-margin-b-50 {
  margin-bottom: 50px;
}

/* Testimonials */
.testimonial-slide {
  animation: fadeIn 0.5s ease-in-out;
}

.testimonial-pagination {
  text-align: center;
  margin-top: 30px;
}

.pagination-dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 0 5px;
  background-color: #ddd;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pagination-dot.active {
  background-color: #72c02c;
}

/* Clients */
.swiper-clients-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
}

.swiper-clients-img {
  max-height: 60px;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.swiper-clients-img:hover {
  opacity: 1;
}

/* Pricing */
.pricing {
  text-align: center;
  padding: 40px 30px;
  background: white;
  border: 2px solid #e5e5e5;
  border-radius: 5px;
  transition: all 0.3s ease;
  height: 100%;
}

.pricing:hover {
  border-color: #72c02c;
  transform: translateY(-5px);
}

.pricing-active {
  border-color: #72c02c;
  box-shadow: 0 10px 30px rgba(114, 192, 44, 0.3);
}

.pricing-icon {
  font-size: 48px;
  color: #72c02c;
  margin-bottom: 20px;
  display: block;
}

.pricing-list {
  text-align: left;
  list-style: none;
  padding: 0;
}

.pricing-list-item {
  padding: 8px 0;
  border-bottom: 1px solid #e5e5e5;
}

/* Promo section */
.promo-section {
  position: relative;
  padding: 80px 0;
  min-height: 400px;
  display: flex;
  align-items: center;
}

.promo-section-img-right {
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  z-index: 1;
}

.promo-section-img-right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ver-center {
  position: relative;
  z-index: 2;
}

.promo-section-col {
  max-width: 50%;
  padding-right: 50px;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (max-width: 768px) {
  .col-sm-4,
  .col-sm-6,
  .col-sm-8,
  .col-sm-9 {
    flex: 0 0 100%;
  }
  
  .carousel-title {
    font-size: 2rem;
  }
  
  .promo-section-col {
    max-width: 100%;
    padding-right: 15px;
  }
  
  .promo-section-img-right {
    position: relative;
    width: 100%;
    margin-top: 30px;
  }
}
</style>