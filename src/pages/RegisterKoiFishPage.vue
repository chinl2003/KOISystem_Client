<template>
    <div>
      <HeaderCustomer />
      <div class="content">
        <h1 class="page-title">
            <span :class="{ highlighted: step === 1 }">ĐĂNG KÍ CHỨNG CHỈ</span> | 
            <span :class="{ highlighted: step === 2 }">ĐĂNG KÍ CÁ KOI</span>
        </h1>
        <div class="row">
          <div class="col-md-4 image-section">
            <img :src="koi1" alt="Koi Image 1" class="koi-image" />
          </div>
          <div class="col-md-8">
            <form @submit.prevent="submitForm">
              <div v-if="step === 1">
                <div class="form-group">
                  <label for="certificateNumber">Số chứng chỉ <span class="required">*</span></label>
                  <input type="text" id="certificateNumber" v-model="certificate.certificateNumber" placeholder="Vui lòng nhập số chứng chỉ" required />
                </div>
                <div class="form-group">
                  <label for="issuingPlace">Nơi cấp chứng chỉ <span class="required">*</span></label>
                  <input type="text" id="issuingPlace" v-model="certificate.issuingPlace" placeholder="Vui lòng nhập nơi cấp chứng chỉ" required />
                </div>
                <div class="form-group">
                  <label for="contactInfo">Thông tin liên lạc với nơi cấp <span class="required">*</span></label>
                  <input type="text" id="contactInfo" v-model="certificate.contactInfo" placeholder="Vui lòng nhập thông tin liên lạc" required />
                </div>
                <div class="form-group">
                  <label for="owner">Người sở hữu <span class="required">*</span></label>
                  <input type="text" id="owner" v-model="certificate.owner" placeholder="Vui lòng nhập tên người sở hữu" required />
                </div>
                <div class="form-group">
                  <label for="age">Độ tuổi của cá Koi <span class="required">*</span></label>
                  <input type="number" id="age" v-model="certificate.age" placeholder="Vui lòng nhập độ tuổi của cá Koi" required />
                </div>
                <div class="form-group">
                  <label for="microchip">Mã số microchip <span class="required">*</span></label>
                  <input type="text" id="microchip" v-model="certificate.microchip" placeholder="Vui lòng nhập mã số microchip" required />
                </div>
                <div class="form-group">
                  <label for="seller">Người bán <span class="required">*</span></label>
                  <input type="text" id="seller" v-model="certificate.seller" placeholder="Vui lòng nhập tên người bán" required />
                </div>
                <div class="form-group">
                  <label for="certificateLink">Link chứng chỉ <span class="required">*</span></label>
                  <input type="url" id="certificateLink" v-model="certificate.certificateLink" placeholder="Vui lòng nhập link chứng chỉ" required />
                </div>
                <teleport to="body">
                  <button type="button" class="next-button" @click="nextStep">
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />
                  </button>
                </teleport>
              </div>
              <div v-if="step === 2">
                <div class="form-group">
                  <label for="name">Tên <span class="required">*</span></label>
                  <input type="text" id="name" v-model="koi.name" placeholder="Vui lòng nhập tên cá Koi" required />
                </div>
                <div class="form-group">
                  <label for="age">Tuổi <span class="required">*</span></label>
                  <input type="number" id="age" v-model="koi.age" placeholder="Vui lòng nhập tuổi cá Koi" required />
                </div>
                <div class="form-group">
                  <label for="weight">Cân nặng <span class="required">*</span></label>
                  <input type="number" id="weight" v-model="koi.weight" placeholder="Vui lòng nhập cân nặng cá Koi" required />
                </div>
                <div class="form-group">
                  <label for="size">Kích thước <span class="required">*</span></label>
                  <input type="text" id="size" v-model="koi.size" placeholder="Vui lòng nhập kích thước cá Koi" required />
                </div>
                <div class="form-group">
                  <label for="color">Màu sắc <span class="required">*</span></label>
                  <input type="text" id="color" v-model="koi.color" placeholder="Vui lòng nhập màu sắc cá Koi" required />
                </div>
                <div class="form-group">
                  <label for="pattern">Hoa văn <span class="required">*</span></label>
                  <input type="text" id="pattern" v-model="koi.pattern" placeholder="Vui lòng nhập hoa văn cá Koi" required />
                </div>
                <div class="form-group">
                  <label for="species">Chủng loại <span class="required">*</span></label>
                  <input type="text" id="species" v-model="koi.species" placeholder="Vui lòng nhập chủng loải cá Koi" required />
                </div>
                <div class="form-group">
                  <label for="shape">Hình dáng <span class="required">*</span></label>
                  <input type="text" id="shape" v-model="koi.shape" placeholder="Vui lòng nhập hình dáng cá Koi" required />
                </div>
                <div class="form-group">
                  <label for="photo">Tải ảnh lên <span class="required">*</span></label>
                  <input type="file" id="photo" @change="handlePhotoUpload" required />
                </div>
                <div class="form-group">
                  <label for="video">Tải video lên <span class="required">*</span></label>
                  <input type="file" id="video" @change="handleVideoUpload" required />
                </div>
                <teleport to="body">
                  <button type="button" class="back-button" @click="prevStep">
                    <font-awesome-icon :icon="['fas', 'chevron-left']" />
                  </button>
                </teleport>
                <div class="row">
                    <div class="col-md-6 offset-md-4">
                        <button type="submit" class="save-button">Lưu</button>
                    </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FooterCustomer />
    </div>
  </template>
  <script>
  import HeaderCustomer from '@/components/HeaderCustomer.vue'
  import FooterCustomer from '@/components/FooterCustomer.vue'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import koi1 from '@/assets/images/koi1.png'
  
  export default {
    name: 'HomePage',
    components: {
      HeaderCustomer,
      FooterCustomer,
      FontAwesomeIcon
    },
    data() {
      return {
        step: 1,
        certificate: {
          certificateNumber: '',
          issuingPlace: '',
          contactInfo: '',
          owner: '',
          age: '',
          microchip: '',
          seller: '',
          certificateLink: ''
        },
        koi: {
          name: '',
          age: '',
          weight: '',
          size: '',
          color: '',
          pattern: '',
          species: '',
          shape: '',
        },
        koi1,
      }
    },
    methods: {
      nextStep() {
        this.step = 2;
      },
      prevStep() {
        this.step = 1;
      },
      submitForm() {
      },
      handlePhotoUpload(event) {
      },
      handleVideoUpload(event) {
      }
    }
  }
  </script>
  <style scoped>
  .content {
  /* min-height: 60vh;
  padding: 20px; */
  border: 2px solid #d3d3d3; 
  border-radius: 10px; 
  padding: 20px;
  margin-bottom: 20px; 
  margin-left: 20px;
  margin-right: 20px;
}
.highlighted {
  background-color: #d3d3d3; 
  padding: 0 10px;
  border-radius: 10px;
}

.page-title {
  margin-left: 20px;
  margin-bottom: 20px;
  font-weight: bold; 
  font-size: 30px; 
}

.image-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.koi-image {
  width: 700px;
  height: 700px;
  margin: 5px;
  transform: rotate(45deg);
}

.section-title {
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold; 
  font-size: 20px;
}

.required {
  color: red;
}

input[type="text"],
input[type="number"],
input[type="url"],
input[type="file"] {
  width: 80%; 
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px; 
  transition: border-color 0.3s, box-shadow 0.3s; 
}

input[type="text"]:focus,
input[type="number"]:focus,
input[type="url"]:focus,
input[type="file"]:focus {
  border-color: #b2b4b6;
  box-shadow: 0 0 5px rgba(91, 94, 91, 0.5); 
}

button {
  display: inline-block;
  padding: 10px;
  background-color: #b2b4b6;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #b2b4b6;
}

.next-button,
.back-button {
  position: absolute;
  right: 20px;
  top: 50%; 
  transform: translateY(-50%);
  background-color: #d3d3d3;
  color: black;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.save-button {
  background-color: #b22222;
  color: white;
  width: 100px; 
  height: 50px; 
  border-radius: 25px; 
  display: block;
  right: 50px; 
  bottom: 20px;
  margin: 20px; 
  font-size: 18px;
}
  .col-md-8 {
  position: relative;
}
  </style>
  