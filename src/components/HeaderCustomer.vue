<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <div class="navbar-brand d-flex align-items-center col-3">
          <img :src="logo" alt="Logo" class="logo-img" />
          <span class="brand-text">KOI SHOWCASE</span>
        </div>
        <div class="collapse navbar-collapse col-9">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown" @click="toggleDropdown('register')">
              <a class="nav-link dropdown-toggle" href="#introduction">
                Đăng kí
              </a>
              <ul class="dropdown-menu" :class="{ show: showRegisterDropdown }">
                <li><a class="dropdown-item" href="#">Đăng kí cá Koi</a></li>
                <li><a class="dropdown-item" href="#">Đăng kí cuộc thi</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown" @click="toggleDropdown('list')">
              <a class="nav-link dropdown-toggle" href="#nationality">
                Danh sách
              </a>
              <ul class="dropdown-menu" :class="{ show: showListDropdown }">
                <li><a class="dropdown-item" href="#">Danh sách cá Koi</a></li>
                <li><a class="dropdown-item" href="#">Danh sách cuộc thi</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown" @click="toggleDropdown('payment')">
              <a class="nav-link dropdown-toggle" href="#category">
                Thanh toán
              </a>
              <ul class="dropdown-menu" :class="{ show: showPaymentDropdown }">
                <li><a class="dropdown-item" href="#">Lịch sử thanh toán</a></li>
                <li><a class="dropdown-item" href="#">Lịch sử nhận tiền</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#news">Cuộc thi</a>
            </li>
            <li>
              <i class="fas fa-user user-icon"></i>
              <span @click="toggleMenu" class="user-name">{{ fullName }}</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
    <div v-if="showMenu" class="modal" @click="toggleMenu">
      <div class="modal-content" @click.stop>
        <span class="close" @click="toggleMenu">×</span>
        <p>Full Name: {{ fullName }}</p>
        <p>Total Money in Wallet: {{ totalMoney }}</p>
      </div>
    </div>
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
        fullName: getUserFullName(),
        totalMoney: '1000 VND' // Example value, replace with actual data
      }
    },
    methods: {
      toggleMenu() {
        this.showMenu = !this.showMenu
      },
      toggleDropdown(dropdown) {
        if (dropdown === 'register') {
          this.showRegisterDropdown = !this.showRegisterDropdown;
        } else if (dropdown === 'list') {
          this.showListDropdown = !this.showListDropdown;
        } else if (dropdown === 'payment') {
          this.showPaymentDropdown = !this.showPaymentDropdown;
        }
      },
      handleClickOutside(event) {
        if (!this.$el.contains(event.target)) {
          this.showMenu = false;
          this.showRegisterDropdown = false;
          this.showListDropdown = false;
          this.showPaymentDropdown = false;
        }
      }
    },
    mounted() {
      document.addEventListener('click', this.handleClickOutside);
    }
  }
  </script>
  
  <style scoped>
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
    display: none;
    justify-content: center;
    gap: 1rem;
  }
  
  .dropdown-menu.show {
    display: flex;
  }
  
  .dropdown-item {
    text-align: center;
  }
  
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  </style>
  