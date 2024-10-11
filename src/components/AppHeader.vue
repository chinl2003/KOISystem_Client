<template>
  <div class="header">
    <span class="header__logo">Koi Fish FBT</span>

    <div class="header__search">
      <font-awesome-icon class="header__search-icon--search" icon="magnifying-glass" />
      <input class="header__search-input" type="text" placeholder="Search..." />
      <font-awesome-icon class="header__search-icon--microphone" icon="microphone" />
    </div>

    <div class="header__navigation">
      <a href="/" class="header__navigation-item">Giới thiệu</a>
      <a href="/" class="header__navigation-item">Cuộc thi</a>
      <a href="/" class="header__navigation-item">Luật thi đấu</a>
      <a href="/" class="header__navigation-item">Tiêu chí chấm điểm</a>
      <a href="/" class="header__navigation-item">Tin tức</a>
    </div>

    <div class="header__auth">
      <Button class="header__auth-login-button" color="#FFD166">
        <span class="header__auth-login-button-text">Đăng ký / Đăng nhập</span>
      </Button>

      <Button class="header__auth-register-button" color="#DF0C00">
        <span class="header__auth-register-button-text">Đăng ký cá Koi đi thi</span>
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from '@/components/common/Button.vue'
</script>

<style lang="scss" scoped>
.header {
  background-color: #30b0c7;
  color: white;
  text-align: center;
  font-size: 20px;
  padding: 12px 180px 12px 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__logo {
    font-size: 36px;
    font-weight: bold;
  }

  &__search {
    display: flex;
    align-items: center;
    border-radius: 10px;
    background-color: white;
    padding: 0px 12px;

    &-icon {
      font-size: 20px;

      &--search {
        color: #3c3c43;
        cursor: pointer;
      }

      &--microphone {
        margin-left: 8px;
        color: #000000;
        cursor: pointer;
      }
    }

    input {
      margin-left: 10px;
      padding: 5px;
      border-radius: 5px;
      border: none;
      width: 136px;

      &:focus {
        outline: none;
      }
    }
  }

  &__navigation {
    display: flex;
    justify-content: space-around;
    gap: 20px;

    &-item {
      cursor: pointer;
      color: white;
      text-decoration: none;
    }
  }

  &__auth {
    display: flex;
    gap: 20px;
    font-size: 16px;

    &-login-button {
      &-text {
        font-weight: bold;
        text-decoration: underline;
      }
    }

    &-register-button {
      &-text {
        font-weight: bold;
        color: white;
      }
    }
  }
}
</style>
