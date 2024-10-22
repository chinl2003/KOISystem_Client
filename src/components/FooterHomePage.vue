<template>
  <footer class="footer">
    <div class="container pb-12">
      <div class="logo">
        <img :src="logo" alt="Logo" />
        <h2>KOI SHOWCASE</h2>
      </div>
      <p>
        Chào mừng bạn đến với Koi Showcase - Nơi hội tụ đam mê cá Koi. <br />Hãy tham gia cùng Koi
        Showcase, trang web chính thức cập nhật những tin tức mới nhất và độc đáo nhất về cá Koi từ
        khắp nơi trên thế giới.
      </p>
      <div class="tw-flex tw-mt-6 tw-w-[900px] tw-justify-between tw-text-[16px]">
        <div class="tw-flex tw-gap-2 tw-items-center">
          <font-awesome-icon icon="phone-volume" />
          <p>Phone: 0819790919</p>
        </div>

        <div class="tw-flex tw-gap-2 tw-items-center">
          <font-awesome-icon icon="envelope" />
          <p>Email: koishowcase@gmail.com</p>
        </div>
        <div class="tw-flex tw-gap-2 tw-items-center">
          <font-awesome-icon icon="house" />
          <p>Website: koishowcase.com</p>
        </div>
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
  background-color: #3a1493;
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
