<template>
    <div>
      <HeaderBarHomePage />
      <div class="content">
        <p>Home Page</p>
      </div>
      <FooterHomePage />
    </div>
  </template>
  
  <script>
  import HeaderBarHomePage from '@/components/HeaderBarHomePage.vue'
  import FooterHomePage from '@/components/FooterHomePage.vue'
  
  export default {
    name: 'HomePage',
    components: {
      HeaderBarHomePage,
      FooterHomePage
    }
  }
  </script>
  
  <style scoped>
  .content {
    min-height: 60vh; 
    padding: 20px;
  }
  </style>
  