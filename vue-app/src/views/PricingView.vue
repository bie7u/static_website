<template>
  <LayoutComponent>
    <div class="content-lg container">
      <div class="row margin-b-40">
        <div class="col-sm-12">
          <h1>Pricing Plans</h1>
          <p>Choose the plan that's right for you</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-sm-4" v-for="(plan, index) in pricingPlans" :key="index">
          <div class="pricing" :class="{ 'pricing-active': plan.featured }">
            <div class="margin-b-30">
              <i :class="`pricing-icon ${plan.icon}`"></i>
              <h3>{{ plan.name }} <span> - $</span> {{ plan.price }}</h3>
              <p>{{ plan.description }}</p>
            </div>
            <ul class="list-unstyled pricing-list margin-b-50">
              <li class="pricing-list-item" v-for="feature in plan.features" :key="feature">{{ feature }}</li>
            </ul>
            <a href="#" class="btn-theme btn-theme-sm btn-default-bg text-uppercase">Choose Plan</a>
          </div>
        </div>
      </div>
    </div>
  </LayoutComponent>
</template>

<script>
import LayoutComponent from '@/components/LayoutComponent.vue'

export default {
  name: 'PricingView',
  components: {
    LayoutComponent
  },
  data() {
    return {
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
  }
}
</script>

<style scoped>
.pricing {
  text-align: center;
  padding: 40px 30px;
  background: white;
  border: 2px solid #e5e5e5;
  border-radius: 5px;
  margin-bottom: 30px;
  transition: all 0.3s ease;
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

.pricing h3 {
  margin-bottom: 15px;
  font-size: 24px;
}

.pricing-list {
  text-align: left;
}

.pricing-list-item {
  padding: 8px 0;
  border-bottom: 1px solid #e5e5e5;
}

.btn-theme {
  background-color: #72c02c;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 3px;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s ease;
}

.btn-theme:hover {
  background-color: #5a9c23;
  color: white;
  text-decoration: none;
}
</style>