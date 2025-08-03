<template>
  <footer class="footer">
    <!-- Links -->
    <div class="footer-seperator">
      <div class="content-lg container">
        <div class="row">
          <div class="col-sm-2 sm-margin-b-50">
            <!-- List -->
            <ul class="list-unstyled footer-list">
              <li class="footer-list-item"><router-link class="footer-list-link" to="/">Home</router-link></li>
              <li class="footer-list-item"><router-link class="footer-list-link" to="/about">About</router-link></li>
              <li class="footer-list-item"><router-link class="footer-list-link" to="/products">Products</router-link></li>
              <li class="footer-list-item"><router-link class="footer-list-link" to="/pricing">Pricing</router-link></li>
              <li class="footer-list-item"><a class="footer-list-link" href="#">Clients</a></li>
              <li class="footer-list-item"><a class="footer-list-link" href="#">Careers</a></li>
              <li class="footer-list-item"><router-link class="footer-list-link" to="/contact">Contact</router-link></li>
              <li class="footer-list-item"><a class="footer-list-link" href="#">Terms</a></li>
            </ul>
            <!-- End List -->
          </div>
          <div class="col-sm-4 sm-margin-b-30">
            <!-- List -->
            <ul class="list-unstyled footer-list">
              <li class="footer-list-item"><a class="footer-list-link" href="#">Twitter</a></li>
              <li class="footer-list-item"><a class="footer-list-link" href="#">Facebook</a></li>
              <li class="footer-list-item"><a class="footer-list-link" href="#">Instagram</a></li>
              <li class="footer-list-item"><a class="footer-list-link" href="#">YouTube</a></li>
            </ul>
            <!-- End List -->
          </div>
          <div class="col-sm-5 sm-margin-b-30">
            <h2 class="color-white">Send Us A Note</h2>
            <form @submit.prevent="submitForm">
              <input v-model="form.name" type="text" class="form-control footer-input margin-b-20" placeholder="Name" required>
              <input v-model="form.email" type="email" class="form-control footer-input margin-b-20" placeholder="Email" required>
              <input v-model="form.phone" type="text" class="form-control footer-input margin-b-20" placeholder="Phone" required>
              <textarea v-model="form.message" class="form-control footer-input margin-b-30" rows="6" placeholder="Message" required></textarea>
              <button type="submit" class="btn-theme btn-theme-sm btn-base-bg text-uppercase" :disabled="submitting">
                {{ submitting ? 'Submitting...' : 'Submit' }}
              </button>
            </form>
          </div>
        </div>
        <!--// end row -->
      </div>
    </div>
    <!-- End Links -->

    <!-- Copyright -->
    <div class="content container">
      <div class="row">
        <div class="col-xs-6">
          <img class="footer-logo" :src="footerLogo" alt="Asentus Logo">
        </div>
        <div class="col-xs-6 text-right">
          <p class="margin-b-0">
            <a class="color-base fweight-700" href="http://keenthemes.com/preview/asentus/">Asentus</a> 
            Theme Powered by: <a class="color-base fweight-700" href="http://www.keenthemes.com/">KeenThemes.com</a>
          </p>
        </div>
      </div>
      <!--// end row -->
    </div>
    <!-- End Copyright -->

    <!-- Back To Top -->
    <a href="javascript:void(0);" @click="scrollToTop" class="back-to-top" v-show="showBackToTop">Top</a>
  </footer>
</template>

<script>
import logoImg from '@/assets/images/logo.png'

export default {
  name: 'FooterComponent',
  data() {
    return {
      footerLogo: logoImg,
      showBackToTop: false,
      submitting: false,
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      this.submitting = true
      // Simulate form submission
      setTimeout(() => {
        alert('Thank you for your message! We will get back to you soon.')
        this.resetForm()
        this.submitting = false
      }, 1000)
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    handleScroll() {
      this.showBackToTop = window.pageYOffset > 300
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
.footer-list-link {
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
}

.footer-list-link:hover {
  color: #72c02c;
  text-decoration: none;
}

.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #72c02c;
  color: white;
  padding: 10px 15px;
  border-radius: 3px;
  text-decoration: none;
  font-size: 12px;
  font-weight: bold;
  transition: all 0.3s ease;
  z-index: 1000;
}

.back-to-top:hover {
  background-color: #5a9c23;
  color: white;
  text-decoration: none;
}
</style>