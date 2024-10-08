<template>
  <div>
    <HeaderBarHomePage />
    <div class="flex flex-col gap-12 px-[120px]">
      <section id="introduction" class="px-5 md:px-30 mt-12">
        <div class="text-2xl md:text-4xl mb-5 text-center">Kết quả chung cuộc giải đấu A</div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div class="flex flex-col items-center text-center w-full">
            <img src="@/assets/images/koi-a-mature.png" class="w-full aspect-square object-cover" />
            <div class="pt-5 text-lg md:text-xl font-bold">Koi A- Giải nhất -Hạng mature</div>
          </div>

          <div class="flex flex-col items-center text-center w-full">
            <img src="@/assets/images/koi-b-adult.png" class="w-full aspect-square object-cover" />
            <div class="pt-5 text-xl font-bold">Koi B- Giải nhất -Hạng adult</div>
          </div>

          <div class="flex flex-col items-center text-center w-full">
            <img src="@/assets/images/koi-a-young.png" class="w-full aspect-square object-cover" />
            <div class="pt-5 text-xl font-bold">Koi A- Giải nhất -Hạng young</div>
          </div>

          <div class="flex flex-col items-center text-center w-full">
            <img src="@/assets/images/koi-b-baby.png" class="w-full aspect-square object-cover" />
            <div class="pt-5 text-xl font-bold">Koi A- Giải nhất -Hạng baby</div>
          </div>
        </div>
      </section>

      <section id="nationality">
        <div class="mt-5">
          <div class="text-4xl text-center font-bold">Giải thưởng chung cuộc</div>
          <div class="flex justify-center flex-col items-center gap-4 mt-4">
            <div class="flex flex-col gap-2 items-center text-xl">
              <img src="@/assets/images/prize.png" />
              <span>Giải nhất</span>
              <span>100.000.000 VND</span>
            </div>

            <div class="flex gap-24">
              <div class="flex flex-col gap-2 items-center text-xl">
                <img src="@/assets/images/prize.png" />
                <span>Giải nhất</span>
                <span>100.000.000 VND</span>
              </div>
              <div class="flex flex-col gap-2 items-center text-xl">
                <img src="@/assets/images/prize.png" />
                <span>Giải nhất</span>
                <span>100.000.000 VND</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="category">
        <div class="flex justify-center w-full px-[20%]">
          <div class="basis-1/2 flex flex-col items-center gap-4 px-12">
            <div class="text-3xl">Các tiêu chí chấm điểm</div>
            <div class="text-2xl">
              <ul class="flex flex-col gap-2">
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

          <div class="basis-1/2 flex flex-col items-center gap-4 px-12">
            <div class="text-3xl">Tại sao cần tốn phí khi đăng kí thi</div>
            <div class="text-2xl">
              Việc thu phí đăng ký tham dự không chỉ giúp chúng tôi duy trì và nâng cao chất lượng
              của sự kiện mà còn mang lại nhiều lợi ích thiết thực cho người tham gia:Đảm bảo chất
              lượng sự kiện, đảm bảo tính cạnh tranh công bằng,phần thưởng hấp dẫn cùng với đóng góp
              vào cộng đồng
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="px-[120px] flex flex-col gap-12 mb-12">
          <div class="text-4xl text-center font-bold">“Profile “ Ban giám khảo</div>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-4">
              <div class="w-[300px] h-[300px] bg-[#CB9B9B]"></div>
              <div class="text-2xl">Manoru Komada</div>
              <div class="text-xl text-center">
                Mamoru Kodama là một trong những giám khảo hàng đầu và có uy tín nhất trong cộng
                đồng cá Koi. Ông là người sáng lập Kodama Koi Farm, một trong những trang trại cá
                Koi lớn nhất và nổi tiếng nhất thế giới.Ông Kodama được biết đến với kiến thức sâu
                rộng về các giống cá Koi và kỹ thuật nuôi dưỡng. Ông thường xuyên được mời làm giám
                khảo tại các cuộc thi cá Koi quốc tế và đã xuất bản nhiều sách về cá Koi.
              </div>
            </div>

            <div class="flex flex-col items-center gap-4">
              <div class="w-[300px] h-[300px] bg-[#CB9B9B]"></div>
              <div class="text-2xl">Tosyo Sakai</div>
              <div class="text-xl text-center">
                Toshio Sakai là một giám khảo và nhà lai tạo cá Koi nổi tiếng từ Nhật Bản. Ông là
                chủ sở hữu của trang trại cá Koi nổi tiếng Isawa Nishikigoi Center.Toshio Sakai được
                biết đến với việc phát triển nhiều giống cá Koi đẹp và độc đáo. Ông đã giành nhiều
                giải thưởng lớn tại các cuộc thi cá Koi quốc tế và được coi là một trong những
                chuyên gia hàng đầu trong lĩnh vực này.
              </div>
            </div>

            <div class="flex flex-col items-center gap-4">
              <div class="w-[300px] h-[300px] bg-[#CB9B9B]"></div>
              <div class="text-2xl">Peter Waddington</div>
              <div class="text-xl text-center">
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
</style>
