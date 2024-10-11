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
          <label for="name" class="bold-label">Tên cá Koi</label>
          <input type="text" id="name" v-model="searchData.name" class="form-control small-input" placeholder="Vui lòng nhập tên cá Koi" />
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
        <div class="form-group date-group"> 
  <label class="bold-label text-center" style="display:block;">Ngày đăng kí</label>
  <div class="date-range text-center">
    <div>
      <label for="startDate" class="bold-label">Từ</label>
      <input type="date" id="startDate" v-model="searchData.startDate" class="form-control small-input" placeholder="Vui lòng chọn ngày bắt đầu" />
    </div>
    <div class="arrow">
                        <font-awesome-icon :icon="['fas', 'arrow-right']" />
                    </div>
    <div>
      <label for="endDate" class="bold-label">Đến</label>
      <input type="date" id="endDate" v-model="searchData.endDate" class="form-control small-input" placeholder="Vui lòng chọn ngày kết thúc" />
    </div>
  </div>
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
  color: rgb(139, 4, 4); 
}

.modal-body {
  margin-top: 20px;
}

.form-group {
  margin-bottom: 20px;
  padding-bottom: 10px; 
}

.form-group:not(:last-child):not(.date-group) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 20px;
  margin-bottom: 20px; 
}



.date-range {
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
  margin-top: 10px;
}

.arrow {
    margin-top: 30px;
    font-size: x-large;
    display: flex;
    align-items: center;
    height: auto;
    line-height: 1;
}

.bold-label {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.small-input {
  width: 100%;
}

.select-input {
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

input::placeholder,
select::placeholder {
  color: rgba(0, 0, 0, 0.5);
  font-style: normal;
}
</style>
