<template>
    <div>
      <HeaderCustomer />
      <div class="content">
        <p>Customer Page</p>
      </div>
      <FooterCustomer />
    </div>
  </template>
  
  <script>
  import HeaderCustomer from '@/components/HeaderCustomer.vue'
  import FooterCustomer from '@/components/FooterCustomer.vue'
  
  export default {
    name: 'HomePage',
    components: {
        HeaderCustomer,
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
  