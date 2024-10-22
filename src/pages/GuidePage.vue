<template>
  <HeaderBarHomePage />
  <div class="tw-flex tw-flex-col tw-gap-12 tw-px-[120px] tw-py-24 tw-bg-[#EFE9D9]">
    <div class="tw-text-5xl tw-font-bold">Hướng dẫn đăng kí dự thi</div>
    <div class="tw-bg-[#DF0C00] tw-h-2 tw-w-full" />
    <div class="tw-flex tw-w-full tw-justify-between">
      <div class="tw-flex tw-flex-col tw-gap-10 tw-w-2/3">
        <div class="tw-text-3xl tw-font-bold">Bước 1 - Tạo tài khoản mới / Đặt lại mật khẩu</div>
        <div class="tw-text-2xl">
          Khách hàng mới, thêm địa chỉ email và biệt hiệu của bạn trên trang đăng nhập để bắt đầu.
        </div>
        <button
          class="tw-text-[#DF0C00] tw-border-[#DF0C00] tw-border-4 tw-text-2xl tw-bg-[#FFFFFF] tw-px-6 tw-py-2 tw-w-fit"
        >
          Đăng kí tài khoản
        </button>
      </div>
      <img :src="Guide1" alt="guide" class="tw-w-[400px]" />
    </div>
    <div class="tw-bg-[#DF0C00] tw-h-2 tw-w-full" />
    <div class="tw-flex tw-w-full tw-justify-between">
      <div class="tw-flex tw-flex-col tw-gap-10 tw-w-2/3">
        <div class="tw-text-3xl tw-font-bold">
          Bước 2 – Cung cấp đầy đủ thông tin tài khoản và cá dự thi
        </div>
        <div class="tw-text-2xl">
          Thêm chi tiết người dùng như họ và tên của bạn, tiến thêm một bước nữa để thông tin Koi
          của bạn. Bạn cũng có thể chọn thêm thông tin thanh toán cho quy trình thanh toán nhanh đối
          với cá koi được đăng ký thi với giá cố định, giành chiến thắng tại cuộc đấu giá hoặc thông
          qua tùy chọn đăng ký bây giờ.
        </div>
        <button
          class="tw-text-[#DF0C00] tw-border-[#DF0C00] tw-border-4 tw-text-2xl tw-bg-[#FFFFFF] tw-px-6 tw-py-2 tw-w-fit"
        >
          Chọn đăng ký ngay bây giờ
        </button>
      </div>
      <img :src="Guide2" alt="guide" class="tw-w-[400px]" />
    </div>
    <div class="tw-bg-[#DF0C00] tw-h-2 tw-w-full" />
    <div class="tw-flex tw-w-full tw-justify-between">
      <div class="tw-flex tw-flex-col tw-gap-10 tw-w-2/3">
        <div class="tw-text-3xl tw-font-bold">Bước 3 – Thanh toán</div>
        <div class="tw-text-2xl">Thanh toán phí đăng kí (giao động dưới 1tr).</div>
      </div>
      <img :src="Guide3" alt="guide" class="tw-w-[400px]" />
    </div>
    <div class="tw-bg-[#DF0C00] tw-h-2 tw-w-full" />
    <div class="tw-flex tw-w-full tw-justify-between">
      <div class="tw-flex tw-flex-col tw-gap-10 tw-w-2/3">
        <div class="tw-text-3xl tw-font-bold">Bước 4 - Đợi xét duyệt và nhận thông báo</div>
        <div class="tw-text-2xl">
          Bạn sẽ được nhận thông báo lich thi khi được xét duyệt thành công.
        </div>
      </div>
      <img :src="Guide4" alt="guide" class="tw-w-[400px]" />
    </div>
  </div>
  <FooterHomePage />
</template>

<script setup>
import HeaderBarHomePage from '@/components/HeaderBarHomePage.vue'
import FooterHomePage from '@/components/FooterHomePage.vue'
import Guide1 from '@/assets/images/guide/guide1.png'
import Guide2 from '@/assets/images/guide/guide2.png'
import Guide3 from '@/assets/images/guide/guide3.png'
import Guide4 from '@/assets/images/guide/guide4.png'
</script>
