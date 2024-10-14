<template>
    <footer class="footer">
      <div class="container">
        <div class="logo">
            <img :src="logo" alt="Logo" />
          <h2>KOI SHOWCASE</h2>
        </div>
        <p>Chào mừng bạn đến với Koi Showcase - Nơi hội tụ đam mê cá Koi. Hãy tham gia cùng Koi Showcase, trang web chính thức cập nhật những tin tức mới nhất và độc đáo nhất về cá Koi từ khắp nơi trên thế giới.</p>
        <div class="contact-info">
          <p>Phone: 0819790919</p>
          <p>Email: koishowcase@gmail.com</p>
          <p>Website: koishowcase.com</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  import logo from '@/assets/images/logo.png'
  export default {
    name: 'FooterComponent',
    data() {
      return {
        logo
      }
    }
  }
  </script>
  
  <style scoped>
  .footer {
    background-color: #8B0000; 
    color: white;
    padding: 20px;
    text-align: center;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .logo img {
    max-height: 200px; 
    margin-bottom: 10px;
  }
  
  .contact-info {
    margin-top: 10px;
  }
  
  .contact-info p {
    margin: 5px 0;
  }
  </style>
  