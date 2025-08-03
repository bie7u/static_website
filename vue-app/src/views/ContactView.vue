<template>
  <LayoutComponent>
    <div class="content-lg container">
      <div class="row margin-b-40">
        <div class="col-sm-12">
          <h1>Contact Us</h1>
          <p>Get in touch with our team</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-sm-8">
          <h3>Send us a message</h3>
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="row">
              <div class="col-sm-6">
                <input v-model="form.name" type="text" class="form-control margin-b-20" placeholder="Your Name" required>
              </div>
              <div class="col-sm-6">
                <input v-model="form.email" type="email" class="form-control margin-b-20" placeholder="Your Email" required>
              </div>
            </div>
            <input v-model="form.subject" type="text" class="form-control margin-b-20" placeholder="Subject" required>
            <textarea v-model="form.message" class="form-control margin-b-30" rows="8" placeholder="Your Message" required></textarea>
            <button type="submit" class="btn-theme btn-theme-lg text-uppercase" :disabled="submitting">
              {{ submitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
        
        <div class="col-sm-4">
          <h3>Contact Information</h3>
          <div class="contact-info">
            <div class="contact-item">
              <i class="icon-location-pin"></i>
              <div>
                <h4>Address</h4>
                <p>123 Main Street<br>City, State 12345<br>United States</p>
              </div>
            </div>
            
            <div class="contact-item">
              <i class="icon-phone"></i>
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div class="contact-item">
              <i class="icon-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>info@example.com</p>
              </div>
            </div>
            
            <div class="contact-item">
              <i class="icon-clock"></i>
              <div>
                <h4>Business Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br>Saturday: 10:00 AM - 4:00 PM<br>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutComponent>
</template>

<script>
import LayoutComponent from '@/components/LayoutComponent.vue'

export default {
  name: 'ContactView',
  components: {
    LayoutComponent
  },
  data() {
    return {
      submitting: false,
      form: {
        name: '',
        email: '',
        subject: '',
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
      }, 2000)
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
.contact-form .form-control {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  font-size: 14px;
  transition: border-color 0.3s ease;
}

.contact-form .form-control:focus {
  border-color: #72c02c;
  outline: none;
  box-shadow: 0 0 5px rgba(114, 192, 44, 0.3);
}

.margin-b-20 {
  margin-bottom: 20px;
}

.margin-b-30 {
  margin-bottom: 30px;
}

.btn-theme {
  background-color: #72c02c;
  color: white;
  padding: 15px 40px;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-theme:hover {
  background-color: #5a9c23;
}

.btn-theme:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.contact-info {
  margin-top: 30px;
}

.contact-item {
  display: flex;
  margin-bottom: 30px;
  align-items: flex-start;
}

.contact-item i {
  font-size: 24px;
  color: #72c02c;
  margin-right: 15px;
  margin-top: 5px;
  min-width: 24px;
}

.contact-item h4 {
  margin: 0 0 10px 0;
  font-size: 16px;
  color: #333;
}

.contact-item p {
  margin: 0;
  color: #666;
  line-height: 1.6;
}
</style>