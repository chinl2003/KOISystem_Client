<template>
    <div class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <h2 class="form-title">ĐĂNG KÍ THÀNH VIÊN</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="fullName">Họ:<span class="required">*</span></label>
            <input type="text" id="fullName" v-model="form.lastName" required placeholder="Vui lòng nhập họ và tên đệm...">
          </div>
  
          <div class="form-group">
            <label for="firstName">Tên:<span class="required">*</span></label>
            <input type="text" id="firstName" v-model="form.firstName" required placeholder="Vui lòng nhập tên...">
          </div>
  
          <div class="form-group">
            <label for="email">Email:<span class="required">*</span></label>
            <input type="email" id="email" v-model="form.email" @input="validateEmail" @blur="validateEmail" required placeholder="Vui lòng nhập email...">
          </div>
          <div class="form-group">
            <label for="email">SĐT:<span class="required">*</span></label>
            <input type="text" id="phone" v-model="form.phone" required placeholder="Vui lòng nhập SĐT...">
          </div>
          <div class="form-group">
            <label for="dob">Ngày sinh:<span class="required">*</span></label>
            <Datepicker type="text" id="dob" v-model="form.dob" required placeholder="Vui lòng nhập ngày sinh..."/>
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
  import { apiClient } from '@/api/axios';
import { toastSuccess, toastWarning } from '@/utils/toast';
import Datepicker from 'vue3-datepicker'

  export default {
    name: 'RegisterModal',
    components: {
      Datepicker
    },
    data() {
      return {
        form: {
          lastName: '',
          firstName: '',
          email: '',
          dob: null,
          phone:"",
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
        this.register()
      },
      validateEmail() {
      const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      if (!emailRegex.test(this.email)) {
        this.emailError = 'Please enter a valid email address. For example "example@example.com"';
      } else {
        this.emailError = '';
      }
    },
    validatePhone(){
      const phoneRegrex = /^[0-9]{10}$/
      if (!phoneRegrex.test(this.phone)){
        this.phoneError = 'Please enter phone number enough 10 number from 0 to 9';
      } else {
        this.phoneError='';
      }
    },
    validateUserName(){
      if(!this.username){
        this.userNameError ='Username can not be blank';
      } else {
        this.userNameError ='';
      }
    },
    validateFirstName(){
      if (!this.firstName){
        this.firstNameError = 'First Name can not be blank';
      } else {
        this.firstNameError='';
      }
    },
    validateLastName(){
      if(!this.lastName){
        this.lastNameError = 'Last Name can not be blank';
      } else {
        this.lastNameError = '';
      }
    },
    validatePassword(){
      if(!this.password){
        this.passwordError = 'Password can not be blank';
      } else {
        this.passwordError='';
      }
    }, 
    validateConfirmPassword(){
      if(!this.passwordConfirm){
        this.passwordConfirmError = 'Password confirm can not be blank';
      } else if (this.passwordConfirm !== this.password) {
        this.passwordConfirmError = 'Password confirm does not match with password';
      } else {
        this.passwordConfirmError='';
      }
    },
    reset(){
      this.username = '';
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.phone = '';
      this.password = '';
      this.passwordConfirm = '';
      this.userNameError = '';
      this.firstNameError = '';
      this.lastNameError = '';
      this.emailError = '';
      this.phoneError = '';
      this.passwordError = '';
      this.passwordConfirmError = '';
    },
    register() {
      console.log("====================================")
      console.log("+++++++++++++++++++++++++++++++++")
      const formData = new FormData();
      formData.append('username', this.form.username);
      formData.append('firstName', this.form.firstName);
      formData.append('lastName', this.form.lastName);
      formData.append('email', this.form.email);
      formData.append('PhoneNumber', this.form.phone); // Ensure the casing matches
      if (this.form.dob) {
        formData.append('DateOfBirth', new Date(this.form.dob).toISOString());
      }
      formData.append('password', this.form.password);
      formData.append('roleName', 'Member');
      apiClient.post('/api/auth/create-user',formData, {
        headers: {
            'Content-Type': 'multipart/form-data' // This is crucial for form data
        }
      })
      .then(response => {
      const data = response.data;
      console.log(response)

      if (data.statusCode == 200) {
        toastSuccess(data.message || 'Registration successful');
        const router = this.$router;
        router.push('/');
        this.closeModal();
      } else {
        console.log(data.errorMessage);
        toastWarning(data.errorMessage || 'An error occurred during registration');
      }
    });
  },
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
  :deep(.datepicker__input) {
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
  