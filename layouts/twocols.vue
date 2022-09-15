<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="slidev-layout default">
    <LayoutHeader class="absolute bottom-0 right-0 transform flip-x" />
    <slot />
    <div class="flex mt-6 mb-3">
      <div
        class="w-1/2 mr-8"
        :class="props.class"
      >
        <slot name="left" />
      </div>
      <div
        class="w-1/2 ml-8"
        :class="props.class"
      >
        <slot name="right" />
      </div>
    </div>
    <div
      class="bottom"
      :class="props.class"
    >
      <slot name="bottom" />
      <LayoutFooter />
    </div>
  </div>
</template>
