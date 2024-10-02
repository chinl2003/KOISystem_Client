<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <div class="navbar-brand d-flex align-items-center col-3">
          <img :src="logo" alt="Logo" class="logo-img" />
          <span class="brand-text">KOI SHOWCASE</span>
        </div>
        <div class="collapse navbar-collapse col-7">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
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
        <div class="d-flex col-2 justify-content align-items-center icons-container">
          <a href="#user" class="nav-link">
            <i class="fas fa-user"></i>
          </a>
          <a href="#menu" class="nav-link" @click="toggleMenu">
            <i class="fa-solid fa-bars"></i>
          </a>
        </div>
      </div>
      <div v-if="showMenu" class="dropdown-menu show">
        <a class="dropdown-item" href="#option1">Option 1</a>
        <a class="dropdown-item" href="#option2">Option 2</a>
        <a class="dropdown-item" href="#option3">Option 3</a>
      </div>
    </nav>
  </template>
  
  <script>
  import logo from '@/assets/images/logo.png'
  
  export default {
    name: 'NavigationBar',
    data() {
      return {
        logo,
        showMenu: false
      }
    },
    methods: {
      toggleMenu() {
        this.showMenu = !this.showMenu
      }
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
  
  .icons-container {
    padding-right: 1rem; 
  }
  
  .icons-container .nav-link {
    font-size: 1.5rem;
    margin-left: 1rem;
  }
  
  .dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #fff;
    border: 1px solid #ccc;
  }
  </style>
  