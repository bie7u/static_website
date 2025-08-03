<template>
  <LayoutComponent>
    <!-- Parallax Hero Section -->
    <div class="parallax-window" :style="{ backgroundImage: `url(${heroImage})` }">
      <div class="parallax-content container">
        <h1 class="carousel-title">About Us</h1>
        <p>Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua <br/> enim minim estudiat veniam siad venumus dolore</p>
      </div>
    </div>

    <!-- Features Section -->
    <div class="section-seperator">
      <div class="content-lg container">
        <div class="row">
          <div class="col-sm-4 sm-margin-b-50" v-for="(feature, index) in features" :key="index">
            <div class="wow fadeInLeft" :data-wow-duration="'.3'" :data-wow-delay="`.${3-index}s`">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
              <a class="link" href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- About Section -->
    <div class="content-lg container">
      <div class="row margin-b-20">
        <div class="col-sm-6">
          <h2>About</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-7 sm-margin-b-50">
          <div class="margin-b-30">
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua. Ut enimet minim veniam magna aliqua. Ut enim minim veniam exercitation laboris ut siad consequat siad minim enum esqudiat dolore.</p>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret tempor incididunt dolore magna consequat siad minim aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua. Ut enim minim veniam exercitation laboris ut siad consequat siad minim enum esqudiat dolore.</p>
        </div>
        <div class="col-sm-4 col-sm-offset-1">
          <img class="img-responsive" :src="aboutImage" alt="Our Office">
        </div>
      </div>
    </div>

    <!-- Services Section -->
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

    <!-- Team Section -->
    <div class="content-lg container">
      <div class="row margin-b-40">
        <div class="col-sm-6">
          <h2>Our Team</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua enim minim veniam exercitation</p>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-4 sm-margin-b-50" v-for="(member, index) in teamMembers" :key="index">
          <div class="margin-b-20">
            <div class="wow zoomIn" :data-wow-duration="'.3'" :data-wow-delay="`.1s`">
              <img class="img-responsive" :src="member.image" :alt="member.name">
            </div>
          </div>
          <h4>{{ member.name }}</h4>
          <p class="text-uppercase color-base">{{ member.position }}</p>
          <p>{{ member.description }}</p>
        </div>
      </div>
    </div>
  </LayoutComponent>
</template>

<script>
import LayoutComponent from '@/components/LayoutComponent.vue'

// Import images
import heroImg from '@/assets/images/1920x1080/01.jpg'
import aboutImg from '@/assets/images/640x380/01.jpg'
import team1 from '@/assets/images/970x647/01.jpg'
import team2 from '@/assets/images/970x647/02.jpg'
import team3 from '@/assets/images/970x647/03.jpg'

export default {
  name: 'AboutView',
  components: {
    LayoutComponent
  },
  data() {
    return {
      heroImage: heroImg,
      aboutImage: aboutImg,
      features: [
        {
          title: 'Art Of Coding',
          description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna ut consequat siad esqudiat dolor'
        },
        {
          title: 'Clean Design',
          description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna ut consequat siad esqudiat dolor'
        },
        {
          title: 'Amazing Support',
          description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna ut consequat siad esqudiat dolor'
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
      teamMembers: [
        {
          name: 'John Smith',
          position: 'Lead Developer',
          description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolor magna',
          image: team1
        },
        {
          name: 'Sarah Johnson',
          position: 'UI/UX Designer',
          description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolor magna',
          image: team2
        },
        {
          name: 'Mike Wilson',
          position: 'Project Manager',
          description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolor magna',
          image: team3
        }
      ]
    }
  }
}
</script>

<style scoped>
.parallax-window {
  min-height: 400px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.parallax-window::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.parallax-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
}

.carousel-title {
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 20px;
}

.section-seperator {
  padding: 80px 0;
}

.link {
  color: #72c02c;
  text-decoration: none;
  font-weight: 600;
}

.link:hover {
  color: #5a9c23;
  text-decoration: none;
}

.bg-color-sky-light {
  background-color: #f8f9fa;
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

.color-base {
  color: #72c02c;
}

.wow {
  visibility: hidden;
}

@media (max-width: 768px) {
  .parallax-window {
    background-attachment: scroll;
    min-height: 300px;
  }
  
  .carousel-title {
    font-size: 2rem;
  }
}
</style>