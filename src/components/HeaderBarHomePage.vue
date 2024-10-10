<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="flex justify-between w-full items-center">
      <div class="flex items-center">
        <img :src="logo" alt="Logo" class="logo-img" />
        <span class="brand-text">KOI SHOWCASE</span>
      </div>
      <div class="flex gap-12">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0 flex gap-24">
          <li class="nav-item">
            <a class="nav-link" href="#introduction">Giới thiệu</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#nationality">Cuộc thi</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#category">Thể loại</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#news">Tin tức</a>
          </li>
        </ul>
      </div>
      <div class="d-flex col-1 justify-content-center align-items-center">
        <font-awesome-icon icon="fa-regular fa-user" class="user-icon" />
        <span @click="toggleMenu" class="user-name">{{ fullName }}</span>
      </div>
    </div>
    <div v-if="showMenu" class="dropdown-menu show">
      <a class="dropdown-item" @click="showRegisterModal">Đăng ký tài khoản</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" @click="showLoginModal">Đăng nhập</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#personalPage">Trang cá nhân</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#logout">Đăng xuất</a>
    </div>
    <RegisterUser v-if="isRegisterModalVisible" @close="isRegisterModalVisible = false" />
    <LoginUser v-if="isLoginModalVisible" @close="isLoginModalVisible = false" />
  </nav>
</template>

<script>
import logo from '@/assets/images/logo.png'
import RegisterUser from '@/modal/RegisterUser.vue'
import LoginUser from '@/modal/LoginUser.vue'

export default {
  name: 'NavigationBar',
  components: {
    RegisterUser,
    LoginUser
  },
  data() {
    return {
      logo,
      showMenu: false,
      fullName: 'chi nguyen',
      isRegisterModalVisible: false,
      isLoginModalVisible: false
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.showMenu = false
      }
    },
    showRegisterModal() {
      this.isRegisterModalVisible = true
      this.showMenu = false
    },
    showLoginModal() {
      this.isLoginModalVisible = true
      this.showMenu = false
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside)
  }
}
</script>

<style lang="css" scoped>
.navbar {
  background-color: #3a1493 !important;
}

.logo-img {
  max-height: 80px;
  margin-right: 0.5rem;
}

.brand-text {
  font-size: 1.5rem;
  color: white;
}

.navbar-nav {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.nav-link {
  color: white !important;
  font-size: 1.2rem;
  text-align: center;
}

.d-flex .fa-user {
  margin-right: 0.5rem;
}

.user-icon {
  color: white;
  font-size: 1.2rem;
}

.user-name {
  cursor: pointer;
  color: white;
  font-size: 1.2rem;
  margin-left: 0.5rem;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
}

.dropdown-item {
  text-align: center;
}

.dropdown-divider {
  height: 1px;
  margin: 0.5rem 0;
  overflow: hidden;
  background-color: #000;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
.required {
  color: red;
}
</style>
