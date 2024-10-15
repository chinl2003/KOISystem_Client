<template>
  <div>
    <HeaderBarHomePage />
    <div class="tw-flex tw-flex-col tw-gap-12 tw-px-[120px]">
      <section id="introduction" class="custom-background tw-h-[1000px]">
        <div class="tw-flex tw-flex-col tw-max-w-[625px] tw-mt-[80px] tw-ml-[160px]">
          <header class="tw-flex tw-flex-col tw-w-full tw-max-md:tw-max-w-full">
            <h1
              class="tw-text-4xl tw-font-bold tw-tracking-wider tw-leading-10 tw-text-slate-900 tw-max-md:tw-max-w-full"
            >
              Triển lãm cá Koi toàn quốc lần thứ 7 (2024)
            </h1>
            <p class="tw-mt-5 tw-text-lg tw-leading-8 tw-text-slate-500 tw-max-md:tw-max-w-full">
              Tiếp nối sự thành công tại cuộc thi lần thứ 6 vừa rồi (2023), tại triển lãm lần này có
              700 slot đăng ký cá koi dành cho nhiều trại cá, hồ và câu lạc bộ cá koi nổi tiếng
              trong và ngoài nước cùng tham gia dự thi.
            </p>
          </header>
          <button
            class="tw-gap-2.5 tw-self-stretch tw-py-1.5 tw-mt-10 tw-max-w-full tw-text-base tw-font-bold tw-leading-loose tw-text-center tw-text-white tw-bg-red-600 tw-w-[189px]"
            @click="handleRegistration"
          >
            Đăng ký cá Koi đi thi
          </button>
        </div>
      </section>

      <section class="tw-px-5 tw-md:tw-px-30 tw-mt-12">
        <div class="tw-text-2xl tw-md:tw-text-4xl tw-mb-5 tw-text-center">Kết quả chung cuộc giải đấu A</div>
        <div class="tw-grid tw-grid-cols-1 tw-md:tw-grid-cols-2 tw-gap-5">
          <div class="tw-flex tw-flex-col tw-items-center tw-text-center tw-w-full">
            <img src="@/assets/images/koi-a-mature.png" class="tw-w-full tw-aspect-square tw-object-cover" />
            <div class="tw-pt-5 tw-text-lg tw-md:tw-text-xl tw-font-bold">Koi A- Giải nhất -Hạng mature</div>
          </div>

          <div class="tw-flex tw-flex-col tw-items-center tw-text-center tw-w-full">
            <img src="@/assets/images/koi-b-adult.png" class="tw-w-full tw-aspect-square tw-object-cover" />
            <div class="tw-pt-5 tw-text-xl tw-font-bold">Koi B- Giải nhất -Hạng adult</div>
          </div>

          <div class="tw-flex tw-flex-col tw-items-center tw-text-center tw-w-full">
            <img src="@/assets/images/koi-a-young.png" class="tw-w-full tw-aspect-square tw-object-cover" />
            <div class="tw-pt-5 tw-text-xl tw-font-bold">Koi A- Giải nhất -Hạng young</div>
          </div>

          <div class="tw-flex tw-flex-col tw-items-center tw-text-center tw-w-full">
            <img src="@/assets/images/koi-b-baby.png" class="tw-w-full tw-aspect-square tw-object-cover" />
            <div class="tw-pt-5 tw-text-xl tw-font-bold">Koi A- Giải nhất -Hạng baby</div>
          </div>
        </div>
      </section>

      <section id="nationality">
        <div class="tw-mt-5">
          <div class="tw-text-4xl tw-text-center tw-font-bold">Giải thưởng chung cuộc</div>
          <div class="tw-flex tw-justify-center tw-flex-col tw-items-center tw-gap-4 tw-mt-4">
            <div class="tw-flex tw-flex-col tw-gap-2 tw-items-center tw-text-xl">
              <img width="320" src="@/assets/images/trophy1.png" />
              <span>Giải nhất</span>
              <span>100.000.000 VND</span>
            </div>

            <div class="tw-flex tw-gap-24">
              <div class="tw-flex tw-flex-col tw-gap-2 tw-items-center tw-text-xl">
                <img width="450" src="@/assets/images/trophy2.png" />
                <span>Giải nhìn</span>
                <span>50.000.000 VND</span>
              </div>
              <div class="tw-flex tw-flex-col tw-gap-2 tw-items-center tw-text-xl">
                <img src="@/assets/images/trophy3.png" />
                <span>Giải ba</span>
                <span>30.000.000 VND</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="category">
        <div class="tw-flex tw-justify-center tw-w-full tw-px-[20%]">
          <div class="tw-basis-1/2 tw-flex tw-flex-col tw-items-center tw-gap-4 tw-px-12">
            <div class="tw-text-3xl">Các tiêu chí chấm điểm</div>
            <div class="tw-text-2xl">
              <ul class="tw-flex tw-flex-col tw-gap-2">
                <li>1.Hình dáng</li>
                <li>2.Kích thước</li>
                <li>3.Chủng loại</li>
                <li>3.Chủng loại</li>
                <li>4.Màu sắc</li>
                <li>5.Hoa văn trên da</li>
                <li>6. Dáng bơi</li>
                <li>7.Sức khỏe</li>
              </ul>
            </div>
          </div>

          <div class="tw-basis-1/2 tw-flex tw-flex-col tw-items-center tw-gap-4 tw-px-12">
            <div class="tw-text-3xl">Tại sao cần tốn phí khi đăng kí thi</div>
            <div class="tw-text-2xl">
              Việc thu phí đăng ký tham dự không chỉ giúp chúng tôi duy trì và nâng cao chất lượng
              của sự kiện mà còn mang lại nhiều lợi ích thiết thực cho người tham gia:Đảm bảo chất
              lượng sự kiện, đảm bảo tính cạnh tranh công bằng,phần thưởng hấp dẫn cùng với đóng góp
              vào cộng đồng
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="tw-px-[120px] tw-flex tw-flex-col tw-gap-12 tw-mb-12">
          <div class="tw-text-4xl tw-text-center tw-font-bold">“Profile “ Ban giám khảo</div>
          <div class="tw-flex tw-gap-4">
            <div class="tw-flex tw-flex-col tw-items-center tw-gap-4">
              <img width="300" src="@/assets/images/judge1.jpg" />
              <div class="tw-text-2xl">Manoru Komada</div>
              <div class="tw-text-xl tw-text-center">
                Mamoru Kodama là một trong những giám khảo hàng đầu và có uy tín nhất trong cộng
                đồng cá Koi. Ông là người sáng lập Kodama Koi Farm, một trong những trang trại cá
                Koi lớn nhất và nổi tiếng nhất thế giới.Ông Kodama được biết đến với kiến thức sâu
                rộng về các giống cá Koi và kỹ thuật nuôi dưỡng. Ông thường xuyên được mời làm giám
                khảo tại các cuộc thi cá Koi quốc tế và đã xuất bản nhiều sách về cá Koi.
              </div>
            </div>

            <div class="tw-flex tw-flex-col tw-items-center tw-gap-4">
              <img
                width="300"
                class="tw-aspect-square tw-object-cover tw-object-top"
                src="@/assets/images/judge2.jpg"
              />
              <div class="tw-text-2xl">Tosyo Sakai</div>
              <div class="tw-text-xl tw-text-center">
                Toshio Sakai là một giám khảo và nhà lai tạo cá Koi nổi tiếng từ Nhật Bản. Ông là
                chủ sở hữu của trang trại cá Koi nổi tiếng Isawa Nishikigoi Center.Toshio Sakai được
                biết đến với việc phát triển nhiều giống cá Koi đẹp và độc đáo. Ông đã giành nhiều
                giải thưởng lớn tại các cuộc thi cá Koi quốc tế và được coi là một trong những
                chuyên gia hàng đầu trong lĩnh vực này.
              </div>
            </div>

            <div class="tw-flex tw-flex-col tw-items-center tw-gap-4">
              <img
                width="300"
                class="tw-aspect-square tw-object-cover tw-object-top"
                src="@/assets/images/judge3.jpg"
              />
              <div class="tw-text-2xl">Peter Waddington</div>
              <div class="tw-text-xl tw-text-center">
                Peter Waddington là một giám khảo và tác giả nổi tiếng trong cộng đồng cá Koi. Ông
                là người sáng lập Infiltration, một công ty chuyên cung cấp các sản phẩm và dịch vụ
                liên quan đến cá Koi. Peter Waddington đã viết nhiều sách và bài báo về cá Koi, chia
                sẻ kiến thức và kinh nghiệm của mình với cộng đồng. Ông thường xuyên được mời làm
                giám khảo tại các cuộc thi cá Koi trên toàn thế giới.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <FooterHomePage />
  </div>
</template>

<script>
import HeaderBarHomePage from '@/components/HeaderBarHomePage.vue'
import FooterHomePage from '@/components/FooterHomePage.vue'
import { KOI_CHAMPION } from '@/constants/index.ts'

export default {
  name: 'HomePage',
  components: {
    HeaderBarHomePage,
    FooterHomePage
  },
  data() {
    return {
      KOI_CHAMPION
    }
  }
}
</script>

<style scoped>
.content {
  min-height: 60vh;
  padding: 20px;
}

.custom-background {
  @apply tw-relative;
  background:
    url('@/assets/images/bg-intro-2.png') 870px 0px no-repeat,
    url('@/assets/images/bg-intro-1.png') 40px 450px no-repeat;
}
</style>
