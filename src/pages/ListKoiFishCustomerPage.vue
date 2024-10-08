<template>
    <div>
      <HeaderCustomer />
      <div class="content">
        <div class="row align-items-center">
          <div class="col-auto">
            <h1 class="title">DANH SÁCH CÁ KOI</h1>
          </div>
          <div class="col-auto">
            <button class="search-button" @click="showSearchModal">Tìm kiếm</button>
          </div>
        </div>
        <div class="data-table">
          <div class="row">
            <div class="col-3" v-for="(koi, index) in koiList" :key="index">
              <div class="koi-card" @click="showModal(koi)">
                <img :src="koi.image" alt="Koi Fish" class="koi-image">
                <div class="koi-details">
                  <div><strong>Tên:</strong> {{ koi.name }}</div>
                  <div><strong>Ngày đăng kí:</strong> {{ koi.registrationDate }}</div>
                  <div><strong>Trạng thái:</strong> {{ koi.status }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterCustomer />
        <InfoKoiFish :isVisible="isModalVisible" :koi="selectedKoi" @close="closeModal" />
        <SearchListKoiFish :isVisible="isSearchModalVisible" @close="closeSearchModal" @search="performSearch" />
      </div>
    </div>
  </template>
  
  <script>
  import HeaderCustomer from '@/components/HeaderCustomer.vue'
  import FooterCustomer from '@/components/FooterCustomer.vue'
  import InfoKoiFish from '@/modal/InfoKoiFish.vue'
  import SearchListKoiFish from '@/modal/SearchListkoiFish.vue'
  import koi1 from '@/assets/images/koi1.png'
  
  export default {
    name: 'HomePage',
    components: {
      HeaderCustomer,
      FooterCustomer,
      InfoKoiFish,
      SearchListKoiFish
    },
    data() {
      return {
        koiList: [
          { image: koi1, name: 'Koi A', registrationDate: '01/01/2024', status: 'Đã duyệt', age: '2 years', weight: '1.5 kg', size: '30 cm', color: 'Red and White', pattern: 'Kohaku', breed: 'Japanese', shape: 'Oval', certificateLink: 'http://example.com/certificate1' },
          { image: koi1, name: 'Koi B', registrationDate: '02/02/2024', status: 'Chưa duyệt', age: '1 year', weight: '1 kg', size: '25 cm', color: 'Black and White', pattern: 'Shiro Utsuri', breed: 'Japanese', shape: 'Oval', certificateLink: 'http://example.com/certificate2' },
          
        ],
        isModalVisible: false,
        isSearchModalVisible: false,
        selectedKoi: {}
      }
    },
    methods: {
      showModal(koi) {
        this.selectedKoi = koi;
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
      showSearchModal() {
        this.isSearchModalVisible = true;
      },
      closeSearchModal() {
        this.isSearchModalVisible = false;
      },
      performSearch(searchData) {
        this.closeSearchModal();
      }
    }
  }
  </script>
  
  <style scoped>
  .content {
    min-height: 60vh;
    padding: 20px;
  }
  
  .title {
    font-size: 30px;
    font-weight: bold;
  }
  
  .search-button {
    background-color: #8B0000; 
    border-radius: 10px;
    color: white;
    padding: 10px 20px;
    border: none;
    font-size: 20px;
    margin-left: 10px; 
  }
  
  .data-table {
    border-radius: 5px;
    margin-top: 20px;
    padding: 10px;
  }
  
  .koi-card {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 20px;
    text-align: left;
    cursor: pointer;
  }
  
  .koi-image {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
  
  .koi-details {
    margin-top: 10px;
  }
  
  .koi-details div {
    margin-bottom: 5px;
  }
  </style>
  