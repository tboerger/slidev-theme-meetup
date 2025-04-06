<script setup lang="ts">
import { resolveAssetUrl } from '@slidev/client/layoutHelper.ts'
import { computed } from 'vue'

const props = defineProps({
  photo: {
    type: String,
    default: '',
  },
})

const photoSrc = computed(() => resolveAssetUrl(props.photo))
</script>

<template>
  <div class="slidev-layout presenter">
    <LayoutHeader class="absolute bottom-0 right-0 transform rotate-y-180" />
    <div class="grid grid-cols-2 w-full h-full">
      <div class="image-right">
        <slot />
      </div>
      <div class="my-14 mr-14">
        <img
          v-if="photo"
          :src="photoSrc"
          class="
            rounded-full
            object-cover
            object-top
            h-80
            w-80
            border
            border-8
            border-secondary-400
            z-10
            float-right
          "
        >
      </div>
    </div>
    <LayoutFooter />
  </div>
</template>
