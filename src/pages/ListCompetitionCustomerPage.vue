<template>
    <div>
        <HeaderCustomer />
        <div class="content">
            <div class="header">
                <h2>DANH SÁCH CUỘC THI</h2>
                <button class="search-btn" @click="openSearchModal"><font-awesome-icon :icon="['fas', 'search']" /> Tìm kiếm</button>
                
            </div>
            <table class="competition-list">
                <thead>
                    <tr class="title">
                        <th></th>
                        <th>Tên cuộc thi đăng kí</th>
                        <th>Tên cá Koi</th>
                        <th>Ngày đăng kí</th>
                        <th>Trạng thái</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Dữ liệu sẽ được lặp lại trong phần tbody -->
                    <tr v-for="(competition, index) in competitions" :key="competition.id">
                        <td>{{ index + 1 }}</td>
                        <td>{{ competition.name }}</td>
                        <td>{{ competition.koiName }}</td>
                        <td>{{ formatDate(competition.registrationDate) }}</td>
                        <td>{{ competition.status }}</td>
                        <td>
                            <div class="icon-wrapper">
                                <font-awesome-icon :icon="['fas', 'bars']" @click="toggleOptions(competition.id)" />
                                <div v-if="competition.showOptions" class="options">
                                    <div @click="viewDetails(competition.id)">Xem chi tiết</div>
                                    <div @click="viewProgress(competition.id)">Tiến độ</div>
                                    <div @click="cancelCompetition(competition.id)">Hủy cuộc thi</div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <FooterCustomer />
        <SearchListCompetitionCustomer :isVisible="showSearchModal" @close="closeSearchModal" @search="performSearch" />
    </div>
</template>
<script>
import HeaderCustomer from '@/components/HeaderCustomer.vue'
import FooterCustomer from '@/components/FooterCustomer.vue'
import SearchListCompetitionCustomer from '@/modal/SearchListCompetitionCustomer.vue';

export default {
    name: 'HomePage',
    components: {
        HeaderCustomer,
        FooterCustomer,
        SearchListCompetitionCustomer
    },
    data() {
        return {
            competitions: [
                { id: 1, name: 'Cuộc thi 1', koiName: 'Koi 1', registrationDate: '13-10-2024', status: 'Đang diễn ra', showOptions: false },
                { id: 2, name: 'Cuộc thi 2', koiName: 'Koi 2', registrationDate: '14-10-2024', status: 'Hoàn thành', showOptions: false }
            ],
            searchModal: false
        }
    },
    methods: {
        toggleOptions(id) {
            this.competitions = this.competitions.map(competition => 
                competition.id === id ? { ...competition, showOptions: !competition.showOptions } : { ...competition, showOptions: false }
            );
        },
        closeOptions(event) {
            if (!event.target.closest('.icon-wrapper')) {
                this.competitions = this.competitions.map(competition => ({ ...competition, showOptions: false }));
            }
        },
        formatDate(date) {
            return date.split('-').reverse().join('-');
        },
        showOptions(id) {
            this.competitions = this.competitions.map(competition => 
                competition.id === id ? { ...competition, showOptions: !competition.showOptions } : competition
            );
        },
        showSearchModal() {
            this.showSearchModal = true;
        },
        closeSearchModal() {
            this.showSearchModal = false;
        },
        performSearch(searchData) {
            this.closeSearchModal();
        }
    },
    mounted() {
        document.addEventListener('click', this.closeOptions);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.closeOptions);
    }
}
</script>
<style scoped>
.content {
    min-height: 60vh; 
    padding: 20px;
    border-radius: 10px;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}

.header h2 {
    font-weight: bold;
    font-size: 40px;
    margin-right: 20px;
    flex-grow: 1;
}

.header .search-btn {
    background-color: #8B0000;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
}
.search-btn .fa-search {
    margin-right: 10px;
    color: white;
}

.search-btn:hover {
    background-color: #A52A2A;
}

.competition-list {
    width: 100%;
    border-collapse: collapse;
    border-radius: 10px;
}

.competition-list .title {
    background-color: #d3d3d3;
    font-weight: bold;
    font-size: 1.5em;
    border-radius: 10px;
}

.competition-list th, .competition-list td {
    border: 0;
    padding: 8px;
    text-align: center;
    vertical-align: middle;
    border-radius: 10px;
}

.competition-list tr {
    border-bottom: 1px solid #ddd;
    border-radius: 10px;
}

.icon-wrapper {
    position: relative;
}

.options {
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: white;
    border: 1px solid #ddd;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    padding: 10px;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    min-width: 150px;
    z-index: 5;
}

.options div {
    padding: 10px;
    cursor: pointer;
    white-space: nowrap;
}

.options div:hover {
    background-color: #f0f0f0;
}
</style>
