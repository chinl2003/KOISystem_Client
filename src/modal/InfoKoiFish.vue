<template>
    <div v-if="isVisible" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <font-awesome-icon :icon="['fas', 'times']" class="close-icon" @click="closeModal" />
        <div class="modal-body">
          <div class="row">
            <div class="col-3">
              <img :src="koi.image" alt="Koi Fish" class="koi-image">
            </div>
            <div class="col-9">
              <h2 class="modal-title">THÔNG TIN CHI TIẾT CÁ KOI</h2>
              <div class="koi-details">
                <div><strong>Tên:</strong> {{ koi.name }}</div>
                <div><strong>Tuổi:</strong> {{ koi.age }}</div>
                <div><strong>Cân nặng:</strong> {{ koi.weight }}</div>
                <div><strong>Kích thước:</strong> {{ koi.size }}</div>
                <div><strong>Màu sắc:</strong> {{ koi.color }}</div>
                <div><strong>Hoa văn:</strong> {{ koi.pattern }}</div>
                <div><strong>Chủng loại:</strong> {{ koi.breed }}</div>
                <div><strong>Hình dáng:</strong> {{ koi.shape }}</div>
                <div><strong>Link chứng chỉ:</strong> <a :href="koi.certificateLink" target="_blank">{{ koi.certificateLink }}</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ModalComponent',
    props: {
      isVisible: {
        type: Boolean,
        required: true
      },
      koi: {
        type: Object,
        required: true
      }
    },
    methods: {
      closeModal() {
        this.$emit('close');
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
    width: 80%;
    max-width: 800px;
  }
  
  .close-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  
  .modal-body {
    text-align: left;
  }
  
  .koi-image {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
  
  .modal-title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .koi-details div {
    margin-bottom: 10px;
  }
  
  .koi-details strong {
    display: inline-block;
    width: 150px;
  }
  </style>
  