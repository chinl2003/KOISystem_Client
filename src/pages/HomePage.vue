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
        <div class="tw-text-2xl tw-md:tw-text-4xl tw-mb-5 tw-text-center">
          Kết quả chung cuộc giải đấu A
        </div>
        <div class="tw-grid tw-grid-cols-1 tw-md:tw-grid-cols-2 tw-gap-5">
          <div class="tw-flex tw-flex-col tw-items-center tw-text-center tw-w-full">
            <img
              src="@/assets/images/koi-a-mature.png"
              class="tw-w-full tw-aspect-square tw-object-cover"
            />
            <div class="tw-pt-5 tw-text-lg tw-md:tw-text-xl tw-font-bold">
              Koi A- Giải nhất -Hạng mature
            </div>
          </div>

          <div class="tw-flex tw-flex-col tw-items-center tw-text-center tw-w-full">
            <img
              src="@/assets/images/koi-b-adult.png"
              class="tw-w-full tw-aspect-square tw-object-cover"
            />
            <div class="tw-pt-5 tw-text-xl tw-font-bold">Koi B- Giải nhất -Hạng adult</div>
          </div>

          <div class="tw-flex tw-flex-col tw-items-center tw-text-center tw-w-full">
            <img
              src="@/assets/images/koi-a-young.png"
              class="tw-w-full tw-aspect-square tw-object-cover"
            />
            <div class="tw-pt-5 tw-text-xl tw-font-bold">Koi A- Giải nhất -Hạng young</div>
          </div>

          <div class="tw-flex tw-flex-col tw-items-center tw-text-center tw-w-full">
            <img
              src="@/assets/images/koi-b-baby.png"
              class="tw-w-full tw-aspect-square tw-object-cover"
            />
            <div class="tw-pt-5 tw-text-xl tw-font-bold">Koi A- Giải nhất -Hạng baby</div>
          </div>
        </div>
      </section>

      <section class="tw-flex tw-flex-col tw-justify-center tw-items-center tw-mb-24">
        <div class="tw-w-[820px]">
          <div class="tw-text-4xl tw-font-bold tw-py-12">
            Đánh giá của người tham gia giải đấu A
          </div>
          <div class="tw-flex tw-flex-col tw-gap-8 tw-mt-12">
            <div v-for="review of reviews" class="tw-flex tw-gap-4 tw-items-start">
              <img :src="review.image" class="tw-w-20 tw-h-20" />
              <div class="tw-flex tw-flex-col tw-gap-4">
                <div class="tw-text-[#385898] tw-text-2xl">{{ review.name }}</div>
                <div class="tw-text-xl">{{ review.comment }}</div>
                <div class="tw-flex">
                  <div class="tw-text-[#90949C]">{{ review.time }}</div>
                  <div class="tw-flex">
                    <img :src="StarIcon" alt="star" class="tw-w-5 tw-h-5 tw-ml-2" />
                    <img :src="StarIcon" alt="star" class="tw-w-5 tw-h-5 tw-ml-2" />
                    <img :src="StarIcon" alt="star" class="tw-w-5 tw-h-5 tw-ml-2" />
                    <img :src="StarIcon" alt="star" class="tw-w-5 tw-h-5 tw-ml-2" />
                    <img :src="StarIcon" alt="star" class="tw-w-5 tw-h-5 tw-ml-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="tw-flex tw-w-full tw-mt-12 tw-gap-4">
            <img :src="Review5" class="tw-w-20 tw-h-20" />
            <div class="tw-w-full tw-flex tw-flex-col">
              <input
                placeholder="Ý kiến của bạn tại đây"
                class="tw-w-full tw-border tw-pt-4 tw-px-4 tw-pb-12"
              />
              <div class="tw-flex tw-justify-between tw-bg-[#F5F6F7] tw-px-4 tw-pt-12 tw-pb-4">
                <div>
                  Đánh giá tại đây
                  <div class="tw-flex">
                    <img :src="UnstartIcon" alt="un-start" />
                    <img :src="UnstartIcon" alt="un-start" />
                    <img :src="UnstartIcon" alt="un-start" />
                    <img :src="UnstartIcon" alt="un-start" />
                    <img :src="UnstartIcon" alt="un-start" />
                  </div>
                </div>
                <button
                  class="tw-bg-[#A1B3D5] tw-w-fit tw-px-6 tw-py-2 tw-rounded tw-text-[#FFFFFF]"
                >
                  Đăng
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          class="tw-bg-[#DF0C00] tw-w-fit tw-px-12 tw-py-4 tw-rounded tw-text-[#FFFFFF] tw-mt-12 tw-text-2xl"
        >
          Tải thêm 20 đánh giá
        </button>
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
      <section id="prize">
        <div class="tw-flex tw-w-full tw-bg-[#EFE9D9] tw-pt-12 tw-pb-24">
          <div class="tw-w-1/3 tw-flex tw-flex-col tw-items-start tw-px-12 tw-gap-6">
            <img :src="KoiFarm" alt="koi-farm" class="tw-w-[160px]" />
            <div>
              Kodama Koi Farm is the premier destination for quality Japanese koi fish for sale. We
              are the largest importer of Koi in North America. We specialize in raising champion
              koi!
            </div>
            <div>
              <div>P.O. Box 893086, Mililani HI 96789</div>
              <div>TEL: +1 (833) Koi Love (1-833-564-5683)</div>
              <div>Email: info@kodamakoifarm.com</div>
              <div>Help: info@kodamakoifarm.com</div>
            </div>

            <div>
              Hours of Operation <br />
              Monday – Friday <br />
              7:00 a.m. to 3:00 p.m. HST
              <br />
              Saturday and Sunday Closed
            </div>
          </div>
          <div class="tw-w-1/3 tw-flex tw-flex-col tw-items-start tw-px-12 tw-gap-6">
            <div class="tw-text-xl tw-text-[#DF0C00]">AWARD-WINNING JAPANESE KOI DEALER</div>
            <div>
              We are proud to be members of many Japanese Nishikigoi organizations and to have
              multiple winners in the All Japan Koi Shows.
            </div>
            <img :src="KoiPrize" alt="koi-farm" class="tw-w-[260px]" />
            <img :src="KoiInfo" alt="koi-farm" class="tw-w-[260px]" />
            <div class="tw-text-xl tw-text-[#DF0C00]">VISIT OUR LOCAL STORES</div>
            <ul>
              <li>Kodama Koi Garden In Florida</li>
              <li>Kodama Koi Garden In New York</li>
              <li>Kodama Koi Garden In New Jersey</li>
            </ul>
            <img :src="PaymentCard" alt="koi-farm" class="tw-w-[260px]" />
          </div>
          <div class="tw-w-1/3 tw-flex tw-flex-col tw-items-start tw-px-12 tw-gap-6">
            <div class="tw-text-xl tw-text-[#DF0C00]">Account Information</div>
            <ul class="tw-underline tw-pl-4">
              <li><a href="https://www.kodamakoifarm.com/instructions/">Welcome!</a></li>
              <li><a href="https://www.kodamakoifarm.com/my-account/">My Account</a></li>
              <li>
                <a href="https://www.kodamakoifarm.com/my-account/reset-password/"
                  >Reset Password</a
                >
              </li>
              <li>
                <a href="https://www.kodamakoifarm.com/my-account/lost-password/">Lost Password</a>
              </li>
              <li><a href="https://www.kodamakoifarm.com/wholesale/">Wholesale Sign Up</a></li>
              <li>
                <a href="https://www.kodamakoifarm.com/my-account/edit-account/">Edit Account</a>
              </li>
              <li>
                <a href="https://www.kodamakoifarm.com/my-account/payment-methods/"
                  >Add Payment Method</a
                >
              </li>
              <li>
                <a href="https://www.kodamakoifarm.com/my-account/customer-logout/">Logout</a>
              </li>
            </ul>

            <div class="tw-text-xl tw-text-[#DF0C00]">For Koi Lovers!</div>
            <ul class="tw-underline tw-pl-4">
              <li>
                <a href="https://www.kodamakoifarm.com/what-is-nishikigoi-history-meaning/"
                  >What is a Nishikigo?</a
                >
              </li>
              <li>
                <a href="https://www.kodamakoifarm.com/how-much-do-koi-fish-cost/"
                  >How Much Do Koi Fish Cost?</a
                >
              </li>
              <li>
                <a href="https://www.kodamakoifarm.com/koi-care-after-receiving/"
                  >How To Care For Your Koi Fish?</a
                >
              </li>
              <li>
                <a href="https://www.kodamakoifarm.com/types-of-pond-fish-small-large-ponds/"
                  >Types of Pond Fish</a
                >
              </li>
              <li>
                <a href="https://www.kodamakoifarm.com/koi-quarantine-tank-setup-procedure/"
                  >Koi Quarantine Tank Setup</a
                >
              </li>
              <li>
                <a href="https://www.kodamakoifarm.com/how-can-i-safely-transport-koi-fish/"
                  >How Can I Move My Koi Fish?</a
                >
              </li>
              <li>
                <a href="https://www.kodamakoifarm.com/benefits-salt-koi-pond-why-should-use-it/"
                  >Benefits of Salt in Koi Pond</a
                >
              </li>
              <li>
                <a href="https://www.kodamakoifarm.com/how-to-make-medicated-koi-food/"
                  >Make Medicated Koi Food at Home</a
                >
              </li>
              <li>
                <a href="https://www.kodamakoifarm.com/winter-koi-pond-preparation-survival/"
                  >Koi Pond Winter Survival Guide</a
                >
              </li>
              <li>
                <a
                  href="https://www.kodamakoifarm.com/raising-koi-fish-for-profit-business-hobbyist/"
                  >Raising Koi Fish for Profit</a
                >
              </li>
              <li>
                <a href="https://www.kodamakoifarm.com/koi-show-competition-tips-preparation/"
                  >Koi Show Preparation Tips</a
                >
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    <FooterHomePage />
  </div>
</template>

<script setup>
import HeaderBarHomePage from '@/components/HeaderBarHomePage.vue'
import FooterHomePage from '@/components/FooterHomePage.vue'
import Review1 from '@/assets/images/reviews/review1.png'
import Review2 from '@/assets/images/reviews/review2.png'
import Review3 from '@/assets/images/reviews/review3.png'
import Review4 from '@/assets/images/reviews/review4.png'
import Review5 from '@/assets/images/reviews/review5.png'
import StarIcon from '@/assets/svg/star.svg'
import UnstartIcon from '@/assets/svg/un-star.svg'
import KoiFarm from '@/assets/images/koi-farm.png'
import KoiPrize from '@/assets/images/koi-prize.png'
import PaymentCard from '@/assets/images/payment-card.png'
import KoiInfo from '@/assets/images/koi-info.png'
const reviews = [
  {
    id: 1,
    name: 'Nguyễn Văn Hùng',
    comment:
      'Cuộc thi tổ chức rất chuyên nghiệp, tôi rất hài lòng với quy trình chấm điểm minh bạch. Rất vui khi cá của tôi đạt giải!',
    time: '20h',
    rating: 4,
    image: Review1
  },
  {
    id: 2,
    name: 'Lê Thị Thanh',
    comment:
      'Sân khấu và khu vực thi đấu được sắp xếp khoa học, các bạn hỗ trợ rất nhiệt tình. Mong sẽ có nhiều cuộc thi hơn nữa trong tương lai!',
    time: '23h',
    rating: 4,
    image: Review2
  },
  {
    id: 3,
    name: 'Đỗ Thị Lan',
    comment:
      '"Các giám khảo rất công tâm và có kinh nghiệm. Tôi đã có cơ hội trao đổi với những người chơi cá Koi lâu năm, rất bổ ích."',
    time: '23h',
    rating: 4,
    image: Review3
  },
  {
    id: 4,
    name: 'Phạm Quang Hải',
    comment:
      '"Chất lượng sự kiện vượt ngoài mong đợi. Cá của tôi không đạt giải nhưng tôi vẫn rất hài lòng với cách tổ chức chuyên nghiệp!”',
    time: '23h',
    rating: 5,
    image: Review4
  }
]

const rating = 4
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
