<template>
    <div class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
            <div class="icon-group">
                <!-- Nút redo -->
                <div class="redo-icon" @click="handleRedo">
                    <font-awesome-icon :icon="['fas', 'redo-alt']" class="redo-icon" />
                </div>
                <!-- Nút đóng -->
                <div class="close-icon" @click="closeModal">
                    <font-awesome-icon :icon="['fas', 'times-circle']" />
                </div>
            </div>
            <h2 class="form-title">TẠO MỚI CUỘC THI</h2>
            <form @submit.prevent="submitForm">
                <div class="form-group">
                    <label for="competitionName">Nhập tên cuộc thi:<span class="required">*</span></label>
                    <input type="text" id="competitionName" v-model="form.competitionName" required placeholder="Vui lòng nhập tên cuộc thi...">
                </div>

                <div class="form-group">
                    <label for="description">Mô tả:<span class="required">*</span></label>
                    <input type="text" id="description" v-model="form.description" required placeholder="Vui lòng nhập mô tả...">
                </div>

                <div class="form-group date-group">
                    <div class="date-label">
                        <strong>Từ:</strong>
                        <input type="date" id="startDate" v-model="form.startDate" required placeholder="Vui lòng nhập ngày bắt đầu...">
                    </div>
                    <div class="arrow">
                        <font-awesome-icon :icon="['fas', 'arrow-right']" />
                    </div>
                    <div class="date-label">
                        <strong>Đến:</strong>
                        <input type="date" id="endDate" v-model="form.endDate" required placeholder="Vui lòng nhập ngày kết thúc...">
                    </div>
                </div>

                <div class="form-group">
                    <label for="competitionType">Hình thức đấu:<span class="required">*</span></label>
                    <select id="competitionType" v-model="form.competitionType" required>
                        <option value="" disabled selected class="placeholder-option">Chọn hình thức đấu...</option>
                        <option value="online">Online</option>
                        <option value="offline">Offline</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="competitionLevel">Hạng thi đấu:<span class="required">*</span></label>
                    <select id="competitionLevel" v-model="form.competitionLevel" required>
                        <option value="" disabled selected class="placeholder-option">Chọn hạng thi đấu...</option>
                        <option value="mature">Mature</option>
                        <option value="large">Large</option>
                        <option value="adult">Adult</option>
                        <option value="baby">Baby</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="competitionRound">Vòng thi đấu:<span class="required">*</span></label>
                    <select id="competitionRound" v-model="form.competitionRound" required>
                        <option value="" disabled selected class="placeholder-option">Chọn vòng thi đấu...</option>
                        <option value="sorkhao">Sơ khảo</option>
                        <option value="banket">Bán kết</option>
                        <option value="chungket">Chung kết</option>
                        <option value="dacbiet">Đặc biệt</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="award">Giải thưởng:<span class="required">*</span></label>
                    <select id="award" v-model="form.award" required>
                        <option value="" disabled selected class="placeholder-option">Chọn giải thưởng...</option>
                        <option value="gold">Giải vàng</option>
                        <option value="silver">Giải bạc</option>
                        <option value="bronze">Giải đồng</option>
                    </select>
                </div>

                <div class="button-group">
                    <button type="submit">Tạo mới</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CreateCompetitionModal',
    data() {
        return {
            form: {
                competitionName: '',
                description: '',
                startDate: '',
                endDate: '',
                competitionType: '',
                competitionLevel: '',
                competitionRound: '',
                award: ''
            }
        }
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
        handleRedo() {
            // Logic để reset modal
            this.form = {
                competitionName: '',
                description: '',
                startDate: '',
                endDate: '',
                competitionType: '',
                competitionLevel: '',
                competitionRound: '',
                award: ''
            };
        },
        submitForm() {
            console.log(this.form); // Có thể xử lý gửi dữ liệu ở đây
            this.closeModal();
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

.icon-group {
    display: flex;
    justify-content: right; /* Đặt các biểu tượng ở giữa */
    gap: 20px; /* Khoảng cách giữa các biểu tượng */
}


.redo-icon {
    cursor: pointer;
    font-size: 24px; /* Kích thước biểu tượng */
    color: black; /* Màu sắc cho nút redo */
}

.close-icon {
    cursor: pointer;
    font-size: 24px; /* Kích thước của biểu tượng */
    color: rgb(139, 4, 4); /* Màu sắc của nút đóng */
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

.form-group input,
.form-group select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.date-group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.date-label {
    display: flex;
    flex-direction: column;
    text-align: center;
    flex: 1;
}

.date-label input {
    width: 80%;
    margin: 0 auto;
}

.arrow {
    margin-top: 20px;
    font-size: x-large;
    display: flex;
    align-items: center;
    height: auto;
    line-height: 1;
}

.button-group {
    display: flex;
    justify-content: center;
    gap: 2rem;
}

button {
    padding: 0.75rem; 
    width: 45%;
    background: #8a0000;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}

button:hover {
    background: gray;
}

.required {
    color: red;
}

select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: none;
    border: 1px solid #ccc;
    padding: 0.5rem;
    width: 100%;
}

#competitionLevel {
    color: #aaa; /* Màu nhạt cho placeholder */
}

#competitionLevel option {
    color: black; /* Màu bình thường cho các tùy chọn khác */
}

#competitionType {
    color: #aaa; /* Màu nhạt cho placeholder */
}

#competitionType option {
    color: black; /* Màu bình thường cho các tùy chọn khác */
}

#competitionRound {
    color: #aaa; /* Màu nhạt cho placeholder */
}

#competitionRound option {
    color: black; /* Màu bình thường cho các tùy chọn khác */
}

#award {
    color: #aaa; /* Màu nhạt cho placeholder */
}

#award option {
    color: black; /* Màu bình thường cho các tùy chọn khác */
}
</style>
