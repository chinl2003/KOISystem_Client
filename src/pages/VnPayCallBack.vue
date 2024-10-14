<template>
    <div>
      <HeaderBarHomePage />
      <div class="flex flex-col gap-12 px-[120px]">
        <h2>Processing Payment...</h2>
        <p v-if="loading">Validating payment with backend...</p>
        <p v-if="!loading && responseCode === '00'">Payment Successful!</p>
        <p v-if="!loading && responseCode !== '00'">Payment Failed. Code: {{ responseCode }}</p>
      </div>
      <FooterHomePage />
    </div>
  </template>
  
  <script>
  import HeaderBarHomePage from '@/components/HeaderBarHomePage.vue';
  import FooterHomePage from '@/components/FooterHomePage.vue';
  import { axiosPrivate } from '@/api/axios';
  
  export default {
    name: 'HomePage',
    components: {
      HeaderBarHomePage,
      FooterHomePage
    },
    data() {
      return {
        loading: true,
        responseCode: null,
      }
    },
    mounted() {
        console.log("================== test ======================");
    // Fetch query parameters from URL (VNPay callback)
    const queryParams = this.$route.query;

    // Send these parameters to .NET backend for validation
    axiosPrivate
      .post('/api/vnpay/validate', queryParams)
      .then((response) => {
        this.responseCode = response.data.code; // Receive response from .NET backend
        this.loading = false;
      })
      .catch((error) => {
        console.error("Error while validating payment:", error);
        this.responseCode = '99'; // Handle error case
        this.loading = false;
      });
  },
  }
  </script>
  
  <style scoped>
  .content {
    min-height: 60vh;
    padding: 20px;
  }
  
  .custom-background {
    @apply relative;
    background:
      url('@/assets/images/bg-intro-2.png') 870px 0px no-repeat,
      url('@/assets/images/bg-intro-1.png') 40px 450px no-repeat;
  }
  </style>
  