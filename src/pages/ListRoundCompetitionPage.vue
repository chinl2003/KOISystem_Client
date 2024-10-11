<template>
    <div>
      <div class="main-container">
        <SidebarAdmin />
        <div class="header-content-container">
          <HeaderAdmin />
          <div class="content">
            <div class="title-search-container">
              <h1 class="title">DANH SÁCH VÒNG THI ĐẤU</h1>
              <button class="search-button">Tìm kiếm</button>
              <font-awesome-icon class="add-button" :icon="['fas', 'plus']" @click="openModal" />
            </div>
  
            <div class="table-container">
              <table class="contest-table">
                <thead>
                  <tr>
                    <th>Tên hạng thi đấu</th>
                    <th>Mô tả</th>
                    <th></th> <!-- Thêm cột thao tác -->
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Vòng sơ khảo</td>
                    <td>Sức khỏe: 40%, hình dáng:30%, kích thước:30%</td>
                    <td>
                      <div class="button-group">
                        <button type="button" class="edit-button" @click="editCompetition('Komada')">Chỉnh sửa</button>
                        <button type="button" class="delete-button" @click="deleteCompetition('Komada')">Xóa</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Vòng bán kết</td>
                    <td>Màu sắc:50%,hoa văn: 50%</td>
                    <td>
                      <div class="button-group">
                        <button type="button" class="edit-button" @click="editCompetition('Koi lớn')">Chỉnh sửa</button>
                        <button type="button" class="delete-button" @click="deleteCompetition('Koi lớn')">Xóa</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Vòng chung kết</td>
                    <td>Vẻ đẹp tổng thể:60%, phong cách bơi:40%</td>
                    <td>
                      <div class="button-group">
                        <button type="button" class="edit-button" @click="editCompetition('Koi nhỏ')">Chỉnh sửa</button>
                        <button type="button" class="delete-button" @click="deleteCompetition('Koi nhỏ')">Xóa</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Vòng đặc biệt</td>
                    <td>Độc đáo: 70%, hiếm có :30%</td>
                    <td>
                      <div class="button-group">
                        <button type="button" class="edit-button" @click="editCompetition('Koi nhỏ')">Chỉnh sửa</button>
                        <button type="button" class="delete-button" @click="deleteCompetition('Koi nhỏ')">Xóa</button>
                      </div>
                    </td>
                  </tr>
                  <!-- Thêm các dòng dữ liệu khác tại đây -->
                </tbody>
              </table>
            </div>
  
            <!-- Modal -->
            <CreateRoundCompetition v-if="showModal" @close="closeModal" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
    <script>
    import HeaderAdmin from '@/components/HeaderAdmin.vue';
    import SidebarAdmin from '@/components/SidebarAdmin.vue';
    import CreateRoundCompetition from '@/modal/CreateRoundCompetition.vue';
    
    export default {
      name: 'ListCompetitionPage',
      components: {
        HeaderAdmin,
        SidebarAdmin,
        CreateRoundCompetition,
      },
      data() {
        return {
          showModal: false, // Biến để theo dõi trạng thái modal
        };
      },
      methods: {
        openModal() {
          this.showModal = true; // Mở modal khi click
        },
        closeModal() {
          this.showModal = false; // Đóng modal
        },
      },
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
      margin-right: 50px;
      font-size: 36px;
      font-weight: bold;
    }
    
    .search-button {
      margin-top: 10px;
      background-color: #8b0000;
      color: white;
      border: none;
      padding: 16px 12px;
      border-radius: 10px;
      cursor: pointer;
      font-size: 25px;
      line-height: 1;
      transition: background-color 0.3s;
      margin-right: 50px;
      width: 8%;
    }
  .search-button:hover {
    background-color: gray; /* Màu nền khi hover */
  }
    .add-button {
      margin-top: 25px;
      border: none;
      border-radius: 5px;
      font-size: 50px;
    }
    
    .table-container {
  margin-top: 20px;
  border-radius: 5px;
  overflow: hidden;
}

.contest-table {
  width: 90%;
  margin: 0 auto;
  border-collapse: separate;
  border-spacing: 0px;
  font-size: larger;
}

.contest-table th {
  font-weight: bold;
  text-align: center;
  font-size: x-large;
  width: 200px;
  height: 70px;
  border-bottom: 2px solid #ddd; /* Chỉ có đường kẻ ngang dưới mỗi tiêu đề */
}

.contest-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #ddd; /* Chỉ có đường kẻ ngang */
  text-align: center;
  font-size: large;
}

    
    .contest-table thead {
      background-color: #b2b4b6;
      color: #333;
    }
    
    .contest-table tbody tr:nth-child(even) {
      background-color: #f9f9f9;
    }
    
    .contest-table tbody tr:hover {
      background-color: #f1f1f1;
    }
    
    .button-group {
    display: flex;
    flex-direction: column; /* Đặt chiều dọc cho các nút */
    align-items: center; /* Căn giữa các nút */
  }
  
  .button-group button {
    width: 20%; /* Đặt chiều rộng cho nút */
    margin: 5px 0; /* Khoảng cách giữa các nút */
    padding:10px 10px; /* Đảm bảo padding đồng đều */
    background-color: #008CBA; /* Màu nền cho nút */
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .button-group .edit-button {
    background-color: rgb(2, 102, 32); /* Màu xanh lá cho nút chỉnh sửa */
  }
  
  .button-group .delete-button {
    background-color: #8b0000; /* Màu đỏ cho nút xóa */
  }
  
  .button-group button:hover {
    background-color: gray; /* Màu nền khi hover */
  }
    </style>
    