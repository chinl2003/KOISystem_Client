<template>
  <div>
    <div class="main-container">
      <SidebarAdmin />
      <div class="header-content-container">
        <HeaderAdmin />
        <div class="content">
          <div class="title-search-container">
            <h1 class="title">DANH SÁCH CÁ KOI ĐĂNG KÍ</h1>
            <button class="search-button" @click="fetchKoiFishData">Tìm kiếm</button>
          </div>

          <div class="table-container">
            <table class="contest-table">
              <thead>
                <tr>
                  <th>Người đăng kí</th>
                  <th>Ngày đăng kí</th>
                  <th>Tên cá Koi</th>
                  <th>Chứng chỉ</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="fish in koiFishList" :key="fish.id">
                  <td>{{ fish.fullName }}</td>
                  <td>{{ fish.createdTime }}</td>
                  <td>{{ fish.name }}</td>
                  <td>{{ fish.certificateUrl }}</td>
                  <td>{{ fish.isVerified ? 'Đã duyệt' : 'Chờ duyệt' }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Modal -->
          <CreateCompetition v-if="showModal" @close="closeModal" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAdmin from '@/components/HeaderAdmin.vue';
import SidebarAdmin from '@/components/SidebarAdmin.vue';
import CreateCompetition from '@/modal/CreateCompetition.vue';
import { axiosPrivate } from '@/api/axios.js';

export default {
  name: 'ListCompetitionPage',
  components: {
    HeaderAdmin,
    SidebarAdmin,
    CreateCompetition
  },
  data() {
    return {
      showModal: false, 
      koiFishList: [] 
    };
  },
  methods: {
    openModal() {
      this.showModal = true; 
    },
    closeModal() {
      this.showModal = false; 
    },
    async fetchKoiFishData() {
  try {
    const response = await axiosPrivate.get('/api/koifish/unverified', {
      params: {
        pageNumber: 1,
        pageSize: 10
      }
    });
    console.log('Full response:', response);

    if (response.data && response.data.items) {
      this.koiFishList = response.data.items.map(koi => ({
        ...koi,
        fullName: koi.fullName, 
        createdTime: koi.createdTime,
        name: koi.name,
        certificateUrl: koi.certificateUrl,
        isVerified: koi.isVerified === true ? 'Đã duyệt' : 'Chờ duyệt'
      }));
      console.log(response.data);
    } else {
      console.error('Unexpected response structure:', response.data.items);
    }

    console.log(this.koiFishList);
  } catch (error) {
    console.error('Error fetching Koi fish data:', error);
  }
}

  },
  mounted(){
    this.fetchKoiFishData();
  }
};
</script>

<style scoped>
.main-container {
  display: flex;
}

.header-content-container {
  flex-grow: 1;
  margin-left: 60px; 
  transition: margin-left 0.3s;
}

.sidebar.expanded + .header-content-container {
  margin-left: 200px; 
}

.content {
  min-height: 60vh;
  padding: 20px;
}

.title-search-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.title {
  margin-left: 85px;
  margin-top: 40px;
  margin-right: 50px; 
  font-size: 36px; 
  font-weight: bold; 
}

.search-button {
  margin-top: 10px;
  background-color: #8b0000;
  color: white;
  border: none;
  padding: 16px 12px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 25px;
  line-height: 1;
  transition: background-color 0.3s;
  margin-right: 50px;
  width: 8%;
}

.search-button:hover {
  background-color: gray; 
}

.add-button {
  margin-top: 25px;
  border: none;
  border-radius: 5px;
  font-size: 50px; 
}

.table-container {
  margin-top: 20px;
  border-radius: 5px;
  overflow: hidden;
}

.contest-table {
  width: 90%;
  margin: 0 auto;
  border-collapse: separate;
  border-spacing: 0px;
  font-size: larger;
}

.contest-table th {
  font-weight: bold;
  text-align: center;
  font-size: x-large;
  width: 200px;
  height: 70px;
  border-bottom: 2px solid #ddd; 
  border-top: none; 
  border-left: none; 
  border-right: none; 
}

.contest-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #ddd; 
  border-top: none; 
  border-left: none; 
  border-right: none; 
  text-align: center;
  font-size: large;
}

.contest-table thead {
  background-color: #b2b4b6; 
  color: #333;
}

.contest-table tbody tr:nth-child(even) {
  background-color: #f9f9f9; 
}

.contest-table tbody tr:hover {
  background-color: #f1f1f1; 
}

.contest-table tbody ul {
  padding-left: 15px;
  text-align: center;
  list-style-type: square; 
  list-style: none;
}
</style>