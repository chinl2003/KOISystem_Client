<template>
    <div>
      <HeaderBarHomePage />
      <div class="content">
        <p>Customer Page</p>
      </div>
      <FooterCustomer />
    </div>
  </template>
  
  <script>
  import HeaderBarHomePage from '@/components/HeaderCustomer.vue'
  import FooterCustomer from '@/components/FooterCustomer.vue'
  
  export default {
    name: 'HomePage',
    components: {
      HeaderBarHomePage,
        FooterCustomer
    }
  }
  </script>
  
  <style scoped>
  .content {
    min-height: 60vh; 
    padding: 20px;
  }
  </style>
  