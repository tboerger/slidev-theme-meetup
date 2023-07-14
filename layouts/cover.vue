<template>
  <div class="slidev-layout cover text-center">
    <LayoutHeader class="absolute bottom-0 right-0 transform rotate-y-180" />
    <div class="my-auto">
      <slot />
    </div>
    <LayoutFooter />
  </div>
</template>
