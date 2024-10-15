<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <router-link to="/customer" class="navbar-brand d-flex align-items-center col-3 no-link-style">
        <img :src="logo" alt="Logo" class="logo-img" />
        <span class="brand-text">KOI SHOWCASE</span>
      </router-link>
      <div class="collapse navbar-collapse col-9">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item" @click.stop="toggleDropdown('register')">
            <a class="nav-link" href="#">Đăng kí <font-awesome-icon :icon="['fas', 'chevron-down']" class="chevron-icon" /></a>
            <ul v-if="showRegisterDropdown" class="sub-menu">
              <li><router-link class="dropdown-item" to="/register-koi-fish">Đăng kí cá Koi</router-link></li>
              <div class="dropdown-divider"></div>
              <li><router-link class="dropdown-item" to="/register/competition">Đăng kí cuộc thi</router-link></li>
            </ul>
          </li>
          <li class="nav-item" @click.stop="toggleDropdown('list')">
            <a class="nav-link" href="#">Danh sách <font-awesome-icon :icon="['fas', 'chevron-down']" class="chevron-icon" /></a>
            <ul v-if="showListDropdown" class="sub-menu">
              <li><router-link class="dropdown-item" to="/list-koi-fish">Danh sách cá Koi</router-link></li>
              <div class="dropdown-divider"></div>
              <li><router-link class="dropdown-item" to="/list-competition-customer">Danh sách cuộc thi</router-link></li>
            </ul>
          </li>
          <li class="nav-item" @click.stop="toggleDropdown('payment')">
            <a class="nav-link" href="#">Thanh toán <font-awesome-icon :icon="['fas', 'chevron-down']" class="chevron-icon" /></a>
            <ul v-if="showPaymentDropdown" class="sub-menu">
              <li><router-link class="dropdown-item" to="/payment/history">Lịch sử thanh toán</router-link></li>
              <div class="dropdown-divider"></div>
              <li><router-link class="dropdown-item" to="/payment/receive">Lịch sử nhận tiền</router-link></li>
            </ul>
          </li>
          <li class="nav-item" @click.stop="toggleDropdown('competition')">
            <a class="nav-link" href="#">Cuộc thi <font-awesome-icon :icon="['fas', 'chevron-down']" class="chevron-icon" /></a>
            <ul v-if="showCompetitionDropdown" class="sub-menu">
              <li><router-link class="dropdown-item" to="/competition/past">Theo dõi cuộc thi</router-link></li>
            </ul>
          </li>
          <li class="nav-item d-flex align-items-center">
            <i class="fas fa-user user-icon"></i>
            <span class="user-name">{{ fullName }}</span>
            <font-awesome-icon :icon="['fas', 'bars']" class="bars-icon" @click="toggleMenu"/>
            <ul v-if="showMenu" class="user-menu">
              <li class="menu-item">
                <font-awesome-icon :icon="['fas', 'user']" />
                <span>{{ fullName }}</span>
              </li>
              <div class="dropdown-divider"></div>
              <li class="menu-item">
                <font-awesome-icon :icon="['fas', 'wallet']" />
                <span>Ví tiền: {{ totalMoney }}</span>
              </li>
              <div class="dropdown-divider"></div>
              <li class="menu-item">
                <font-awesome-icon :icon="['fas', 'home']" />
                  <router-link to="/" class="home-link">Trang chủ</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import logo from '@/assets/images/logo.png'
import { getUserFullName } from '@/utils/auth';

export default {
  name: 'NavigationBar',
  data() {
    return {
      logo,
      showMenu: false,
      showRegisterDropdown: false,
      showListDropdown: false,
      showPaymentDropdown: false,
      showCompetitionDropdown: false,
      fullName: getUserFullName(),
      totalMoney: '1000 VND'
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    toggleDropdown(dropdown) {
      if (dropdown === 'register') {
        this.showRegisterDropdown = !this.showRegisterDropdown;
        this.showListDropdown = false;
        this.showPaymentDropdown = false;
        this.showCompetitionDropdown = false;
      } else if (dropdown === 'list') {
        this.showListDropdown = !this.showListDropdown;
        this.showRegisterDropdown = false;
        this.showPaymentDropdown = false;
        this.showCompetitionDropdown = false;
      } else if (dropdown === 'payment') {
        this.showPaymentDropdown = !this.showPaymentDropdown;
        this.showRegisterDropdown = false;
        this.showListDropdown = false;
        this.showCompetitionDropdown = false;
      } else if (dropdown === 'competition') {
        this.showCompetitionDropdown = !this.showCompetitionDropdown;
        this.showRegisterDropdown = false;
        this.showListDropdown = false;
        this.showPaymentDropdown = false;
      }
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.showRegisterDropdown = false;
        this.showListDropdown = false;
        this.showPaymentDropdown = false;
        this.showCompetitionDropdown = false;
        this.showMenu = false;
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  }
}
</script>

<style scoped>
.navbar {
  background-color: #8B0000 !important; 
}

.logo-img {
  max-height: 100px; 
  margin-right: 0.5rem;
}

.brand-text {
  font-size: 1.5rem; 
  color: white;
  cursor: pointer;
}

.no-link-style {
  text-decoration: none;
  color: inherit;
}

.navbar-nav {
  display: flex;
  justify-content: space-around; 
  width: 100%;
  align-items: center;
}

.nav-link {
  color: white !important;
  font-size: 1.5rem;
  font-weight: normal;
  text-align: center; 
}

.chevron-icon {
  color: white;
  margin-left: 0.5rem;
}

.user-icon, .bars-icon {
  color: white;
  font-size: 1.5rem;
  margin-left: 0.5rem;
}

.user-name {
  cursor: pointer;
  color: white;
  font-size: 1.5rem;
  margin-left: 0.5rem;
}

.sub-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: white;
  position: absolute;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 180px;
  border-radius: 10px;
}

.sub-menu .dropdown-item {
  color: black;
  padding: 0.75rem 1rem;
  display: block;
  font-size: 1.1rem;
  text-align: center;
  position: relative;
}

.sub-menu .dropdown-item::after {
  content: '';
  display: block;
  width: 50%;
  height: 1px;
  background-color: #ddd;
  margin: 0.5rem auto;
}

.sub-menu .dropdown-item:last-child::after {
  display: none;
}

.sub-menu .dropdown-item:hover {
  background-color: #f0f0f0;
}

.user-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: white;
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 200px;
  border-radius: 10px;
}
.user-menu .menu-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  font-size: 1.1rem;
  color: black;
}

.user-menu .menu-item:hover {
  background-color: #f0f0f0;
}

.user-menu .menu-item font-awesome-icon {
  margin-right: 10px;
}
.user-menu .menu-item span,
.user-menu .menu-item router-link {
  margin-left: 10px;
}
.user-menu .menu-item .home-link {
  text-decoration: none; 
  color: black; 
  margin-left: 8px;
}

.modal {
  display: none;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: normal;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.dropdown-divider {
  height: 1px;
  margin: 0.5rem 0;
  overflow: hidden;
  background-color: #000;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
