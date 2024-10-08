<template>
    <div>
      <div class="main-container">
        <SidebarAdmin />
        <div class="header-content-container">
          <HeaderAdmin />
          <div class="content">
            <div class="title-search-container">
              <h1 class="title">DANH SÁCH CUỘC THI</h1>
              <button class="search-button">Tìm kiếm</button>
              <font-awesome-icon class="add-button" :icon="['fas', 'plus']" @click="openModal" />
            </div>
  
            <div class="table-container">
              <table class="contest-table">
                <thead>
                  <tr>
                    <th>Tên cuộc thi</th>
                    <th>Mô tả</th>
                    <th>Ngày bắt đầu/Ngày kết thúc</th>
                    <th>Trạng thái</th>
                    <th>Hạng thi đấu/Vòng thi đấu</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Komada</td>
                    <td>......</td>
                    <td>10-09-2024 / 10-11-2024</td>
                    <td>Đang diễn ra</td>
                    <td>
                      <strong>Vòng thi đấu:</strong>
                      <ul>
                        <li>Sơ khảo</li>
                        <li>Bán kết</li>
                        <li>Chung kết</li>
                        <li>Đặc biệt</li>
                      </ul>
                      <strong>Hạng thi đấu:</strong>
                      <ul>
                        <li>Mature</li>
                        <li>Large</li>
                        <li>Adult</li>
                        <li>Baby</li>
                      </ul>
                    </td>
                  </tr>
                  <!-- Thêm các dòng dữ liệu khác tại đây -->
                </tbody>
              </table>
            </div>
  
            <!-- Modal -->
            <CreateCompetition v-if="showModal" @close="closeModal" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import HeaderAdmin from '@/components/HeaderAdmin.vue';
  import SidebarAdmin from '@/components/SidebarAdmin.vue';
  import CreateCompetition from '@/modal/CreateCompetition.vue';
  
  export default {
    name: 'ListCompetitionPage',
    components: {
      HeaderAdmin,
      SidebarAdmin,
      CreateCompetition
    },
    data() {
      return {
        showModal: false // Biến để theo dõi trạng thái modal
      };
    },
    methods: {
      openModal() {
        this.showModal = true; // Mở modal khi click
      },
      closeModal() {
        this.showModal = false; // Đóng modal
      }
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
  
  .content {
    min-height: 60vh;
    padding: 20px;
  }
  
  .title-search-container {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .title {
    margin-left: 85px;
    margin-top: 40px;
    margin-right: 50px; /* Khoảng cách giữa tiêu đề và nút tìm kiếm */
    font-size: 36px; /* Tăng kích thước chữ */
    font-weight: bold; /* Có thể thêm để làm chữ đậm hơn */
  }
  
  .search-button {
    margin-top: 25px;
    background-color: #8B0000; /* Màu nền giống sidebar */
    color: white;
    border: none;
    padding: 8px 12px; /* Giữ nguyên kích thước padding để không làm to nút */
    border-radius: 5px;
    cursor: pointer;
    font-size: 25px; /* Tăng kích thước chữ */
    line-height: 1; /* Căn chỉnh line height để không làm to nút */
    transition: background-color 0.3s;
    margin-right: 50px;
  }
  
  .search-button:hover {
    background-color: #a30000; /* Màu nền khi hover */
  }
  
  .add-button {
    margin-top: 25px;
    border: none;
    border-radius: 5px;
    font-size: 50px; /* Tăng kích thước chữ */
  }
  
  .table-container {
    margin-top: 20px;
    border: none; /* Loại bỏ viền ngoài cùng */
    border-radius: 5px;
    overflow: hidden;
  }
  
  .contest-table {
    width: 90%; /* Thay đổi width để giảm kích thước bảng */
    margin: 0 auto; /* Căn giữa bảng */
    border-collapse: separate; /* Tách các viền để chỉ giữ viền bên trong */
    border-spacing: 0px; /* Khoảng cách giữa các ô */
    font-size: larger;
  }
  
  .contest-table th {
    font-weight: bold; /* Làm cho tất cả các tiêu đề trong bảng in đậm */
    text-align: center;
  }
  
  .contest-table td {
    padding: 12px 15px;
    border: 1px solid #ddd; /* Giữ viền bên trong */
    text-align: center;
    font-size: larger;
  }
  
  .contest-table thead {
    background-color: #b2b4b6; /* Màu xám nhạt cho tiêu đề */
    color: #333;
  }
  
  .contest-table tbody tr:nth-child(even) {
    background-color: #f9f9f9; /* Màu nền xen kẽ */
  }
  
  .contest-table tbody tr:hover {
    background-color: #f1f1f1; /* Hiệu ứng hover */
  }
  
  .contest-table tbody ul {
    padding-left: 15px;
    text-align: center;
    list-style-type: square; /* Thêm icon bullet cho các mục */
    list-style: none;
  }
  </style>
  