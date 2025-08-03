<template>
  <LayoutComponent>
    <div class="content-lg container">
      <div class="row margin-b-40">
        <div class="col-sm-12">
          <h1>Our Work</h1>
          <p>Explore our portfolio and latest projects</p>
        </div>
      </div>
      
      <!-- Portfolio Grid -->
      <div class="masonry-grid row">
        <div v-for="(item, index) in portfolioItems" :key="index" :class="getColumnClass(index)" class="masonry-grid-item">
          <div class="work" @click="openLightbox(item)">
            <div class="work-overlay">
              <img class="full-width img-responsive" :src="item.image" :alt="item.title">
            </div>
            <div class="work-content">
              <h3 class="color-white margin-b-5">{{ item.title }}</h3>
              <p class="color-white margin-b-0">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div v-if="lightboxOpen" class="lightbox-overlay" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <span class="lightbox-close" @click="closeLightbox">&times;</span>
        <img :src="currentLightboxItem.image" :alt="currentLightboxItem.title">
        <div class="lightbox-info">
          <h3>{{ currentLightboxItem.title }}</h3>
          <p>{{ currentLightboxItem.description }}</p>
        </div>
      </div>
    </div>
  </LayoutComponent>
</template>

<script>
import LayoutComponent from '@/components/LayoutComponent.vue'

// Import images
import work1 from '@/assets/images/800x400/01.jpg'
import work2 from '@/assets/images/397x400/01.jpg'
import work3 from '@/assets/images/397x300/01.jpg'
import work4 from '@/assets/images/397x300/02.jpg'
import work5 from '@/assets/images/397x300/03.jpg'

export default {
  name: 'WorkView',
  components: {
    LayoutComponent
  },
  data() {
    return {
      lightboxOpen: false,
      currentLightboxItem: null,
      portfolioItems: [
        {
          image: work1,
          title: 'Art Of Coding',
          description: 'Lorem ipsum dolor sit amet consectetur adipiscing'
        },
        {
          image: work2,
          title: 'Clean Design',
          description: 'Lorem ipsum dolor sit amet consectetur adipiscing'
        },
        {
          image: work3,
          title: 'Modern Layout',
          description: 'Lorem ipsum dolor sit amet consectetur adipiscing'
        },
        {
          image: work4,
          title: 'Creative Solution',
          description: 'Lorem ipsum dolor sit amet consectetur adipiscing'
        },
        {
          image: work5,
          title: 'Responsive Design',
          description: 'Lorem ipsum dolor sit amet consectetur adipiscing'
        },
        {
          image: work1,
          title: 'User Experience',
          description: 'Lorem ipsum dolor sit amet consectetur adipiscing'
        },
        {
          image: work2,
          title: 'Brand Identity',
          description: 'Lorem ipsum dolor sit amet consectetur adipiscing'
        },
        {
          image: work3,
          title: 'Digital Marketing',
          description: 'Lorem ipsum dolor sit amet consectetur adipiscing'
        }
      ]
    }
  },
  methods: {
    getColumnClass(index) {
      // Mimic masonry layout with different column widths
      if (index === 0) return 'col-xs-12 col-sm-6 col-md-8'
      return 'col-xs-6 col-sm-6 col-md-4'
    },
    openLightbox(item) {
      this.currentLightboxItem = item
      this.lightboxOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeLightbox() {
      this.lightboxOpen = false
      this.currentLightboxItem = null
      document.body.style.overflow = 'auto'
    }
  },
  beforeUnmount() {
    // Clean up body overflow in case component is destroyed with lightbox open
    document.body.style.overflow = 'auto'
  }
}
</script>

<style scoped>
.masonry-grid {
  margin: 0 -15px;
}

.masonry-grid-item {
  padding: 15px;
  margin-bottom: 30px;
}

.work {
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.work:hover {
  transform: translateY(-5px);
}

.work-overlay {
  position: relative;
  overflow: hidden;
}

.work-overlay::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(114, 192, 44, 0.8), rgba(90, 156, 35, 0.8));
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.work:hover .work-overlay::before {
  opacity: 1;
}

.work-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  transform: translateY(100%);
  transition: transform 0.3s ease;
  z-index: 2;
}

.work:hover .work-content {
  transform: translateY(0);
}

.full-width {
  width: 100%;
  height: auto;
}

.img-responsive {
  width: 100%;
  height: auto;
  display: block;
}

.color-white {
  color: white;
}

.margin-b-5 {
  margin-bottom: 5px;
}

.margin-b-0 {
  margin-bottom: 0;
}

/* Lightbox styles */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-content {
  max-width: 90%;
  max-height: 90%;
  position: relative;
  background: white;
  border-radius: 5px;
  overflow: hidden;
}

.lightbox-close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 30px;
  color: white;
  cursor: pointer;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-content img {
  width: 100%;
  height: auto;
  display: block;
}

.lightbox-info {
  padding: 20px;
  text-align: center;
}

.lightbox-info h3 {
  margin: 0 0 10px 0;
  color: #333;
}

.lightbox-info p {
  margin: 0;
  color: #666;
}

@media (max-width: 768px) {
  .masonry-grid-item {
    margin-bottom: 20px;
  }
  
  .work-content {
    transform: translateY(0);
    position: relative;
    background: rgba(0, 0, 0, 0.8);
  }
  
  .lightbox-content {
    max-width: 95%;
    max-height: 95%;
  }
}
</style>