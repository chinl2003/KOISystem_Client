<template>
  <button class="button" :style="{ backgroundColor: color }" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps<{
  color: string
}>()

function handleClick() {
  console.log('Button clicked')
}
</script>

<style lang="scss" scoped>
.button {
  padding: 6px 12px !important;
  border: none !important;
  cursor: pointer;
}
</style>
