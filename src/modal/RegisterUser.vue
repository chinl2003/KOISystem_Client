<template>
    <div class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <h2 class="form-title">ĐĂNG KÍ THÀNH VIÊN</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="fullName">Họ và tên đệm:<span class="required">*</span></label>
            <input type="text" id="fullName" v-model="form.fullName" required placeholder="Vui lòng nhập họ và tên đệm...">
          </div>
  
          <div class="form-group">
            <label for="firstName">Tên:<span class="required">*</span></label>
            <input type="text" id="firstName" v-model="form.firstName" required placeholder="Vui lòng nhập tên...">
          </div>
  
          <div class="form-group">
            <label for="email">Email:<span class="required">*</span></label>
            <input type="email" id="email" v-model="form.email" required placeholder="Vui lòng nhập email...">
          </div>
  
          <div class="form-group">
            <label for="dob">Ngày sinh:<span class="required">*</span></label>
            <input type="text" id="dob" v-model="form.dob" required placeholder="Vui lòng nhập ngày sinh...">
          </div>
  
          <div class="form-group">
            <label for="username">Tên đăng nhập:<span class="required">*</span></label>
            <input type="text" id="username" v-model="form.username" required placeholder="Vui lòng nhập tên đăng nhập...">
          </div>
  
          <div class="form-group">
            <label for="password">Mật khẩu:<span class="required">*</span></label>
            <input type="password" id="password" v-model="form.password" required placeholder="Vui lòng nhập mật khẩu...">
          </div>
  
          <div class="form-group">
            <label for="confirmPassword">Mật khẩu xác nhận:<span class="required">*</span></label>
            <input type="password" id="confirmPassword" v-model="form.confirmPassword" required placeholder="Vui lòng nhập mật khẩu xác nhận...">
          </div>
  
          <div class="button-group">
            <button type="submit">Đăng kí</button>
            <button type="button" class="close-button" @click="closeModal">Đóng</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RegisterModal',
    data() {
      return {
        form: {
          fullName: '',
          firstName: '',
          email: '',
          dob: '',
          username: '',
          password: '',
          confirmPassword: ''
        }
      }
    },
    methods: {
      closeModal() {
        this.$emit('close')
      },
      submitForm() {
        this.closeModal()
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
    z-index: 1000;
  }
  
  .modal-content {
    position: relative;
    background: white;
    padding: 2rem;
    border-radius: 8px;
    width: 400px;
    max-width: 90%;
  }
  
  .form-title {
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .form-group input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .button-group {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  
  button {
    padding: 0.75rem; 
    width: 45%;
    background: #3a1493;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background: #2a0f6b;
  }
  .button-group .close-button {
    background: #949393; 
  }
  .required {
    color: red;
  }
  </style>
  