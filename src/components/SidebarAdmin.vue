<template>
  <div class="sidebar" :class="{ expanded: isExpanded }" @click.stop>
    <div v-for="item in menuItems" :key="item.name" class="menu-item" @click="toggleExpand(item)">
      <font-awesome-icon :icon="['fas', item.icon]" class="icon" />
      <span class="tooltip">{{ item.tooltip }}</span>
    </div>
    <div v-if="isExpanded && activeItem && activeItem.submenu" class="submenu">
      <router-link
        v-for="subItem in activeItem.submenu"
        :key="subItem.name"
        :to="subItem.route"
        class="submenu-item"
      >
        {{ subItem.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false,
      activeItem: null,
      menuItems: [
        { icon: 'warehouse', tooltip: 'Báo cáo', route: '/report' },
        {
          icon: 'user-plus',
          tooltip: 'Quản lí nhân sự',
          submenu: [
            { name: 'Quản lí nhân viên'},
            { name: 'Quản lí ban giám khảo'},
          ],
        },
        {
          icon: 'store',
          tooltip: 'Quản lí cuộc thi',
          submenu: [
            { name: 'Danh sách cuộc thi', route: '/list-competition' },
            { name: 'Danh sách hạng thi đấu', route: '/list-rank-competition'},
            { name: 'Danh sách vòng thi đấu', route: '/list-round-competition'},
            { name: 'Danh sách hình thức thi đấu', route: '/list-format-competition'},
            { name: 'Danh sách giải thưởng', route: '/list-reward-competition'},
          ],
        },
        {
          icon: 'wallet',
          tooltip: 'Quản lí thu chi',
          submenu: [
            { name: 'Danh sách thu chi'},
            { name: 'Lịch sử nhà tài trợ'},
            { name: 'Danh sách trao giải thưởng'},
          ],
        },
        {
          icon: 'bars',
          tooltip: 'Danh sách đăng kí',
          submenu: [
            { name: 'Danh sách đăng kí cá Koi', route: '/list-koi-fish-admin'},
            { name: 'Danh sách đăng kí cuộc thi'},
          ],
        },
        {
          icon: 'map',
          tooltip: 'Quản lí điểm cuộc thi',
          submenu: [
            { name: 'Chi tiết điểm cuộc thi'},
            { name: 'Thống kê kết quả cuộc thi'},
          ],
        },
        { icon: 'list', tooltip: 'Phân loại', submenu: [{ name: 'Danh sách phân loại cá Koi' }] },
        { icon: 'pen', tooltip: 'Chấm thi', submenu: [{ name: 'Chi tiết chấm thi'}] },
        {
          icon: 'calendar',
          tooltip: 'Lịch chấm thi',
          submenu: [
            { name: 'Phân công lịch chấm thi'},
            { name: 'Lịch chấm thi'},
          ],
        },
      ],
    };
  },
  methods: {
    toggleExpand(item) {
      if (this.activeItem === item) {
        this.isExpanded = false;
        this.activeItem = null;
      } else {
        this.isExpanded = true;
        this.activeItem = item;
      }
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isExpanded = false;
        this.activeItem = null;
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
};
</script>

<style scoped>
.sidebar {
  width: 60px;
  background-color: #8b0000;
  color: white;
  height: 100vh;
  transition: width 0.3s;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1; /* Đặt z-index cho sidebar */
}
.sidebar.expanded {
  width: 200px;
}
.menu-item {
  position: relative;
  margin: 20px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.icon {
  font-size: 24px;
  margin-left: 10px;
}
.tooltip {
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: left;
  white-space: nowrap;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 10000; /* Đặt z-index cao hơn headerAdmin */
  left: calc(100% + 10px); /* Đặt tooltip sang bên phải icon */
  top: 50%; /* Đặt tooltip ở giữa của menu item */
  transform: translateY(-50%); /* Căn giữa tooltip theo chiều dọc */
  opacity: 0; /* Ẩn tooltip */
  transition: opacity 0.3s;
}
.menu-item:hover .tooltip {
  visibility: visible;
  opacity: 1; /* Hiện tooltip khi hover */
}
.submenu {
  position: absolute;
  top: 0;
  left: 60px;
  width: 140px;
  background-color: #8b0000;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.submenu-item {
  color: white;
  cursor: pointer;
  margin: 5px 0;
  text-decoration: none;
}
</style>
