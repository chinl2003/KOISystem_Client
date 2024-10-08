<template>
  <div>
    <AppHeader />
    <div class="content">
      <section class="champion">
        <div v-for="champion in KOI_CHAMPION">
          <div class="champion-card">
            <img src="@/assets/images/grand-champ.png" alt="champion" class="champion-image" />
            <div class="champion-details">
              <h2 class="champion-title">{{ champion.prize }}</h2>
              <p class="champion-info">{{ champion.cateogory }}</p>
              <p class="champion-info">{{ champion.owner }}</p>
              <p class="champion-info">{{ champion.dealer }}</p>
              <p class="champion-info">{{ champion.breeder }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import { KOI_CHAMPION } from '@/constants/index.ts'

export default {
  name: 'HomePage',
  components: {
    AppHeader,
    AppFooter
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
