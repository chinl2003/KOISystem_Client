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
            <h2 class="form-title">THÊM HÌNH THỨC THI ĐẤU</h2>
            <form @submit.prevent="submitForm">
                <div class="form-group">
                    <label for="name">Tên vòng đấu:<span class="required">*</span></label>
                    <input type="text" id="competitionName" v-model="form.competitionName" required placeholder="Vui lòng nhập tên hình thức thi đấu...">
                </div>

                <div class="form-group">
                    <label for="description">Mô tả:<span class="required">*</span></label>
                    <input type="text" id="description" v-model="form.description" required placeholder="Vui lòng nhập mô tả...">
                </div>

                <div class="button-group">
                    <button type="submit">Thêm</button>
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
                name: '',
                description: ''
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
                name: '',
                description: ''
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


</style>
