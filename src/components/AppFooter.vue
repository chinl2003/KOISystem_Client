<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-top">
        <p class="copyright">©2023 Koi FBT</p>
        <div class="logo">Koi Fish FBT</div>
        <button class="purchase-button">Purchase now</button>
      </div>
      <hr class="footer-divider" />
      <div class="footer-bottom">
        <nav class="footer-nav">
          <a href="#" class="footer-link">Home</a>
          <a href="#" class="footer-link">About</a>
          <a href="#" class="footer-link">Contact</a>
        </nav>
        <div class="social-icons">
          <a href="#" class="social-icon-link">
            <img src="@/assets/images/facebook.svg" alt="Social media icon" class="social-icon" />
          </a>
          <a href="#" class="social-icon-link">
            <img src="@/assets/images/linkedin.svg" alt="Social media icon" class="social-icon" />
          </a>
          <a href="#" class="social-icon-link">
            <img src="@/assets/images/twitter.svg" alt="Social media icon" class="social-icon" />
          </a>
          <a href="#" class="social-icon-link">
            <img src="@/assets/images/youtube.svg" alt="Social media icon" class="social-icon" />
          </a>
          <a href="#" class="social-icon-link">
            <img src="@/assets/images/instagram.svg" alt="Social media icon" class="social-icon" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts"></script>

<style scoped>
.footer {
  background-color: #e7ecff;
  padding: 67px 180px 48px;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  font-family: Roboto, sans-serif;
  font-weight: 500;
}

.logo {
  font-size: 36px;
  font-weight: bolder;
  color: #37447e;
}

.copyright {
  color: #939ea4;
  font-size: 18px;
  line-height: 24px;
}

.purchase-button {
  font-size: 18px;
  color: #fff;
  background-color: #111b47;
  border: none;
  border-radius: 2px;
  padding: 4px 17px;
  cursor: pointer;
}

.footer-divider {
  background-color: #cdd1d4;
  height: 2px;
  border: none;
  margin: 46px 0 20px;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-nav {
  display: flex;
  gap: 58px;
}

.footer-link {
  color: #929ecc;
  font-size: 20px;
  line-height: 24px;
  text-decoration: none;
  font-family: Roboto, sans-serif;
}

.social-icons {
  display: flex;
  gap: 30px;
}

.social-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

@media (max-width: 991px) {
  .footer {
    padding: 40px 20px;
  }

  .footer-content {
    max-width: 100%;
  }

  .footer-nav {
    gap: 40px;
  }
}
</style>
