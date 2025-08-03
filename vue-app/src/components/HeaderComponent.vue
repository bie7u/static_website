<template>
  <header class="header navbar-fixed-top">
    <!-- Navbar -->
    <nav class="navbar" role="navigation">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="menu-container">
          <button type="button" class="navbar-toggle" @click="toggleNavbar" :class="{ 'collapsed': !navbarOpen }" 
                  data-toggle="collapse" data-target=".nav-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="toggle-icon"></span>
          </button>

          <!-- Logo -->
          <div class="logo">
            <router-link class="logo-wrap" to="/">
              <img class="logo-img logo-img-main" :src="logoMain" alt="Asentus Logo">
              <img class="logo-img logo-img-active" :src="logoDark" alt="Asentus Logo">
            </router-link>
          </div>
          <!-- End Logo -->
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse nav-collapse" :class="{ 'in': navbarOpen }">
          <div class="menu-container">
            <ul class="navbar-nav navbar-nav-right">
              <li class="nav-item">
                <router-link class="nav-item-child nav-item-hover" to="/" 
                             :class="{ 'active': $route.name === 'home' }">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-item-child nav-item-hover" to="/pricing" 
                             :class="{ 'active': $route.name === 'pricing' }">Pricing</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-item-child nav-item-hover" to="/about" 
                             :class="{ 'active': $route.name === 'about' }">About</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-item-child nav-item-hover" to="/products" 
                             :class="{ 'active': $route.name === 'products' }">Products</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-item-child nav-item-hover" to="/faq" 
                             :class="{ 'active': $route.name === 'faq' }">FAQ</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-item-child nav-item-hover" to="/contact" 
                             :class="{ 'active': $route.name === 'contact' }">Contact</router-link>
              </li>
            </ul>
          </div>
        </div>
        <!-- End Navbar Collapse -->
      </div>
    </nav>
    <!-- Navbar -->
  </header>
</template>

<script>
import logoMain from '@/assets/images/logo.png'
import logoDark from '@/assets/images/logo-dark.png'

export default {
  name: 'HeaderComponent',
  data() {
    return {
      navbarOpen: false,
      logoMain,
      logoDark
    }
  },
  methods: {
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen
    },
    closeNavbar() {
      this.navbarOpen = false
    }
  },
  mounted() {
    // Close navbar when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.closeNavbar()
      }
    })
  }
}
</script>

<style scoped>
/* Header specific styles */
.header {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: relative;
  z-index: 1000;
}

.navbar {
  padding: 15px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.menu-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo img {
  height: 40px;
}

.navbar-nav {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin-left: 30px;
}

.nav-item-child {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-item-child:hover,
.nav-item-child.router-link-active,
.nav-item-child.active {
  color: #72c02c !important;
  text-decoration: none;
}

.navbar-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
}

@media (max-width: 768px) {
  .navbar-toggle {
    display: block;
  }
  
  .nav-collapse {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    padding: 20px;
  }
  
  .nav-collapse.in {
    display: block;
  }
  
  .navbar-nav {
    flex-direction: column;
  }
  
  .nav-item {
    margin: 10px 0;
  }
}
</style>