<template>
    <div v-if="isVisible" class="modal-overlay" @click="closeModal">
      <div class="modal-content animated-modal" @click.stop>
        <div class="modal-header">
          <h2>Tìm kiếm</h2>
          <div class="modal-icons">
            <font-awesome-icon :icon="['fas', 'redo']" class="icon" @click="resetSearch" />
            <font-awesome-icon :icon="['fas', 'times']" class="icon" @click="closeModal" />
          </div>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="name" class="bold-label">Tên cá Koi</label>
            <input type="text" id="name" v-model="searchData.name" class="form-control small-input" placeholder="Vui lòng nhập tên cá Koi" />
          </div>
          <div class="form-group text-center">
            <label class="bold-label">Ngày đăng kí</label>
            <div class="date-range-labels">
              <span class="bold-label">Từ</span>
              <span class="bold-label">Đến</span>
            </div>
            <div class="date-range">
              <input type="date" id="startDate" v-model="searchData.startDate" class="form-control" placeholder="Vui lòng chọn ngày bắt đầu" />
              <input type="date" id="endDate" v-model="searchData.endDate" class="form-control" placeholder="Vui lòng chọn ngày kết thúc" />
            </div>
          </div>
          <div class="form-group">
            <label for="status" class="bold-label">Trạng thái</label>
            <select id="status" v-model="searchData.status" class="form-control small-input">
              <option value="">Vui lòng chọn trạng thái</option>
              <option value="Đã duyệt">Đã duyệt</option>
              <option value="Chưa duyệt">Chưa duyệt</option>
              <option value="Từ chối">Từ chối</option>
            </select>
          </div>
          <div class="form-group text-center">
            <button class="search-button" @click="performSearch">Tìm kiếm</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchModal',
    props: {
      isVisible: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        searchData: {
          name: '',
          startDate: '',
          endDate: '',
          status: ''
        }
      }
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
      resetSearch() {
        this.searchData = {
          name: '',
          startDate: '',
          endDate: '',
          status: ''
        };
      },
      performSearch() {
        this.$emit('search', this.searchData);
        this.closeModal();
      }
    }
  }
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 5px;
    position: relative;
    width: 50%;
    max-width: 600px;
    animation: fadeIn 0.3s ease-in-out;
  }
  
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .modal-icons {
    display: flex;
    gap: 10px;
  }
  
  .icon {
    cursor: pointer;
  }
  
  .modal-body {
    margin-top: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .date-range-labels {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-left: 80px;
    margin-right: 80px;
  }
  
  .date-range {
    display: flex;
    gap: 10px;
    margin-top: 5px;
    justify-content: center;
    width: 70%;

  }
  
  .bold-label {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .small-input {
    width: 70%;
  }
  
  .search-button {
    background-color: #8B0000;
    border-radius: 5px;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  input::placeholder,
  select::placeholder {
    color: rgba(0, 0, 0, 0.5);
    font-style: normal;
  }
  </style>
  