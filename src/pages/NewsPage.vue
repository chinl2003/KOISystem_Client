<template>
  <HeaderBarHomePage />
  <div class="tw-flex tw-flex-col tw-gap-12 tw-px-[120px] tw-py-24">
    <div class="tw-text-5xl tw-font-bold">Tin tức nóng</div>
    <div
      class="tw-bg-[url('@/assets/images/news/main-new.png')] tw-h-[80vh] tw-bg-no-repeat tw-bg-cover tw-bg-center tw-text-[#FFFFFF] tw-rounded-xl tw-relative"
    >
      <div class="tw-absolute tw-bottom-16 tw-left-16">
        <div class="tw-text-5xl tw-mb-4">
          Những ngôi đền, đền thờ và vườn hồ cá Koi nổi tiếng của Nhật Bản
        </div>
        <div class="tw-flex tw-gap-6 tw-text-xl">
          <div>2 Hours Ago</div>
          <div>CNN Indonesia</div>
        </div>
      </div>
    </div>

    <div class="tw-text-3xl tw-font-semibold">Tin tức mới nhất</div>
    <div class="tw-grid tw-grid-cols-3 tw-gap-16">
      <div v-for="newItem in news">
        <div class="tw-p-8 tw-rounded-sm tw-flex tw-flex-col tw-gap-6">
          <img
            :src="newItem.image"
            :alt="newItem.title"
            class="tw-w-full tw-rounded-sm tw-cursor-pointer"
          />
          <div class="tw-text-2xl tw-font-bold">{{ newItem.title }}</div>
          <div class="tw-flex tw-justify-between">
            <div class="tw-text-lg tw-text-[#949494]">{{ newItem.time }}</div>
            <div class="tw-text-lg tw-text-[#949494]">{{ newItem.author }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterHomePage />
</template>
<script setup>
import HeaderBarHomePage from '@/components/HeaderBarHomePage.vue'
import FooterHomePage from '@/components/FooterHomePage.vue'
import New1 from '@/assets/images/news/new1.png'
import New2 from '@/assets/images/news/new2.png'
import New3 from '@/assets/images/news/new3.png'
import New4 from '@/assets/images/news/new4.png'
import New5 from '@/assets/images/news/new5.png'
import New6 from '@/assets/images/news/new6.png'

const news = [
  {
    id: 1,
    title: 'Cá vàng 101: các loại, chăn nuôi, chăm sóc, cho ăn &; sự kiện!',
    time: '1 Hour Ago',
    author: 'KOI SHOWCASE',
    image: New1
  },
  {
    id: 2,
    title: 'Trách nhiệm tìm lại cá Koi không mong muốn và vai trò',
    time: '1 Hour Ago',
    author: 'KOI SHOWCASE',
    image: New2
  },
  {
    id: 3,
    title: 'Taro Kodama: Hành trình vào thế giới làm chủ cá koi',
    time: '1 Hour Ago',
    author: 'KOI SHOWCASE',
    image: New3
  },
  {
    id: 4,
    title: 'Lời khuyên của chuyên gia để duy trì và khắc phục các vấn đề',
    time: '1 Hour Ago',
    author: 'KOI SHOWCASE',
    image: New4
  },
  {
    id: 5,
    title: 'Koi trong Nghệ thuật &; Văn học',
    time: '1 Hour Ago',
    author: 'KOI SHOWCASE',
    image: New5
  },
  {
    id: 6,
    title: 'Yêu cầu quyên góp cá Koi',
    time: '1 Hour Ago',
    author: 'KOI SHOWCASE',
    image: New6
  }
]
</script>
