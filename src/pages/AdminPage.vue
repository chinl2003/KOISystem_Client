<template>
    <div>
      <div class="main-container">
        <SidebarAdmin />
        <div class="header-content-container">
          <HeaderAdmin />
          <div class="content">
            <p>Admin Page</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import HeaderAdmin from '@/components/HeaderAdmin.vue';
  import SidebarAdmin from '@/components/SidebarAdmin.vue';
  
  export default {
    name: 'AdminPage',
    components: {
      HeaderAdmin,
      SidebarAdmin,
    }
  };
  </script>
  <style scoped>
  .main-container {
    display: flex;
  }
  .header-content-container {
    flex-grow: 1;
    margin-left: 60px; 
    transition: margin-left 0.3s;
  }
  .sidebar.expanded + .header-content-container {
    margin-left: 200px; 
  }
  .header-container {
    width: 100%;
    transition: width 0.3s;
    z-index: 1;
  }
  .content {
    min-height: 60vh;
    padding: 20px;
  }
  </style>
  