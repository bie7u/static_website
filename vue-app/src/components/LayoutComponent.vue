<template>
  <div class="app-layout">
    <HeaderComponent />
    <main class="main-content">
      <slot />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import FooterComponent from './FooterComponent.vue'

export default {
  name: 'LayoutComponent',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 0; /* Remove padding as header is not fixed anymore */
}
</style>