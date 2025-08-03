<template>
  <LayoutComponent>
    <div class="content-lg container">
      <div class="row margin-b-40">
        <div class="col-sm-12">
          <h1>Our Products</h1>
          <p>Discover our latest products and services</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-sm-4 sm-margin-b-50" v-for="(product, index) in products" :key="index">
          <div class="margin-b-20">
            <img class="img-responsive" :src="product.image" :alt="product.alt">
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
  </LayoutComponent>
</template>

<script>
import LayoutComponent from '@/components/LayoutComponent.vue'

// Import images
import product1 from '@/assets/images/970x647/01.jpg'
import product2 from '@/assets/images/970x647/02.jpg'
import product3 from '@/assets/images/970x647/03.jpg'

export default {
  name: 'ProductsView',
  components: {
    LayoutComponent
  },
  data() {
    return {
      products: [
        {
          image: product1,
          alt: 'Product Image',
          title: 'Triangle Roof',
          category: 'Management',
          description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
        },
        {
          image: product2,
          alt: 'Product Image',
          title: 'Curved Corners',
          category: 'Development',
          description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
        },
        {
          image: product3,
          alt: 'Product Image',
          title: 'Bird On Green',
          category: 'Design',
          description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
        },
        {
          image: product1,
          alt: 'Product Image',
          title: 'Modern Architecture',
          category: 'Architecture',
          description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
        },
        {
          image: product2,
          alt: 'Product Image',
          title: 'Creative Solutions',
          category: 'Innovation',
          description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
        },
        {
          image: product3,
          alt: 'Product Image',
          title: 'Digital Experience',
          category: 'Technology',
          description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
        }
      ]
    }
  }
}
</script>

<style scoped>
.link {
  color: #72c02c;
  text-decoration: none;
  font-weight: 600;
}

.link:hover {
  color: #5a9c23;
  text-decoration: none;
}

.sm-margin-b-50 {
  margin-bottom: 50px;
}

.img-responsive {
  width: 100%;
  height: auto;
  border-radius: 5px;
  transition: transform 0.3s ease;
}

.img-responsive:hover {
  transform: scale(1.05);
}
</style>