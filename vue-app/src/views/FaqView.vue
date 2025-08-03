<template>
  <LayoutComponent>
    <div class="content-lg container">
      <div class="row margin-b-40">
        <div class="col-sm-12">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to commonly asked questions</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
            <div class="faq-question" @click="toggleFaq(index)" :class="{ active: faq.open }">
              <h4>{{ faq.question }}</h4>
              <span class="faq-icon">{{ faq.open ? '-' : '+' }}</span>
            </div>
            <div class="faq-answer" v-show="faq.open">
              <p>{{ faq.answer }}</p>
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
  name: 'FaqView',
  components: {
    LayoutComponent
  },
  data() {
    return {
      faqs: [
        {
          question: 'What is included in the pricing plans?',
          answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua. Ut enim minim veniam exercitation laboris ut siad consequat siad minim enum esqudiat dolore.',
          open: false
        },
        {
          question: 'How do I get started?',
          answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua. Ut enim minim veniam exercitation laboris ut siad consequat siad minim enum esqudiat dolore.',
          open: false
        },
        {
          question: 'Can I upgrade or downgrade my plan?',
          answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua. Ut enim minim veniam exercitation laboris ut siad consequat siad minim enum esqudiat dolore.',
          open: false
        },
        {
          question: 'What support do you provide?',
          answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua. Ut enim minim veniam exercitation laboris ut siad consequat siad minim enum esqudiat dolore.',
          open: false
        },
        {
          question: 'Is there a money-back guarantee?',
          answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua. Ut enim minim veniam exercitation laboris ut siad consequat siad minim enum esqudiat dolore.',
          open: false
        },
        {
          question: 'How secure is my data?',
          answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua. Ut enim minim veniam exercitation laboris ut siad consequat siad minim enum esqudiat dolore.',
          open: false
        }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.faqs[index].open = !this.faqs[index].open
    }
  }
}
</script>

<style scoped>
.faq-item {
  margin-bottom: 20px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  overflow: hidden;
}

.faq-question {
  padding: 20px;
  background-color: #f8f9fa;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;
}

.faq-question:hover {
  background-color: #e9ecef;
}

.faq-question.active {
  background-color: #72c02c;
  color: white;
}

.faq-question h4 {
  margin: 0;
  font-size: 18px;
}

.faq-icon {
  font-size: 24px;
  font-weight: bold;
  min-width: 30px;
  text-align: center;
}

.faq-answer {
  padding: 20px;
  background-color: white;
  border-top: 1px solid #e5e5e5;
}

.faq-answer p {
  margin: 0;
  line-height: 1.6;
}
</style>