<template>
    <div class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <h3 class="form-title">KOISHOWCASE XIN CHÀO</h3>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="username"><i class="fa fa-user"></i></label>
            <input type="text" id="username" v-model="form.username" required placeholder="Email">
          </div>
  
          <div class="form-group">
            <label for="password"><i class="fa fa-lock"></i></label>
            <input type="password" id="password" v-model="form.password" required placeholder="Mật khẩu">
          </div>
  
          <button type="button" class="google-signin" @click="signInWithGoogle">
            <i class="fa fa-google"></i> Sign in with Google
          </button>
  
          <div class="button-group">
            <button type="submit" class="login-button">ĐĂNG NHẬP</button>
            <button type="button" class="close-button" @click="closeModal">Đóng</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginUser',
    data() {
      return {
        form: {
          username: '',
          password: ''
        }
      };
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
      submitForm() {
        // Handle form submission
      },
      signInWithGoogle() {
        // Handle Google sign-in
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
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    width: 100%;
    max-width: 400px;
    box-sizing: border-box;
  }
  
  .form-title {
    font-weight: bold;
    color: black;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }
  
  label {
    margin-right: 10px;
  }
  
  input[type=text], input[type=password] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  .google-signin {
    background-color: #4285F4;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
  }
  
  .google-signin i {
    margin-right: 10px;
  }
  
  .button-group {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
  }
  
  button {
    padding: 0.75rem;
    width: 48%;
    background: #2a0f6b;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background: #2a0f6b;
  }
  
  .close-button {
    background: #949393;
  }
  
  .login-button {
    background-color: #2a0f6b;
    color: white;
  }
  
  .login-button:hover {
    background-color: #2a0f6b;
  }
  </style>
  