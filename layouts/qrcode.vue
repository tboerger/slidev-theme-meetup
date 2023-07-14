<script setup lang="ts">
import { computed } from 'vue'
import QRious from 'qrious'

const props = defineProps({
  url: {
    type: String,
    default: '',
  },
})

const qrcode = computed(() => {
    return new QRious({
        value: props.url,
        size: 300
    }).toDataURL()
})
</script>

<template>
  <div class="slidev-layout qrcode text-center">
    <LayoutHeader class="absolute bottom-0 right-0 transform rotate-y-180" />
    <slot />
    <div class="container mx-auto">
      <img
        :src="qrcode"
        alt="QR Code"
        class="w-m inline-block"
      >
    </div>
    <LayoutFooter />
  </div>
</template>
