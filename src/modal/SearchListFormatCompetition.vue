<template>
    <div v-if="isVisible" class="modal-overlay" @click="closeModal">
      <div class="modal-content animated-modal" @click.stop>
        <div class="modal-header">
          <h2>Tìm kiếm</h2>
          <div class="icon-group">
            <div class="redo-icon" @click="resetSearch">
              <font-awesome-icon :icon="['fas', 'redo']" />
            </div>
            <div class="close-icon" @click="closeModal">
              <font-awesome-icon :icon="['fas', 'times-circle']" />
            </div>
          </div>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="name" class="bold-label">Hình thức thi</label>
            <input type="text" id="name" v-model="searchData.name" class="form-control small-input" placeholder="Vui lòng nhập hình thức thi" />
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
    
    .icon-group {
      display: flex;
      justify-content: right;
      gap: 20px;
    }
    
    .redo-icon {
      cursor: pointer;
      font-size: 24px;
      color: black;
    }
    
    .close-icon {
      cursor: pointer;
      font-size: 24px;
      color: rgb(139, 4, 4); /* Màu sắc của nút đóng */
    }
    
    .modal-body {
      margin-top: 20px;
    }
    
    .form-group {
      margin-bottom: 20px;
      padding-bottom: 10px; /* Khoảng cách dưới cùng của mỗi nhóm */
    }
    
    .bold-label {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    
    .small-input {
      width: 100%;
    }
    
    .search-button {
      background-color: #8B0000;
      border-radius: 5px;
      color: white;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
      margin-top: 20px;
    }
    
    .search-button:hover {
      background-color: #a33232;
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
    
    input::placeholder {
      color: rgba(0, 0, 0, 0.5);
      font-style: normal;
    }
    </style>
    