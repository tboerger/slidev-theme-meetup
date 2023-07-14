<template>
  <div class="slidev-layout">
    <LayoutHeader class="absolute bottom-0 right-0 transform rotate-y-180" />
    <div
      class="top"
    >
      <slot />
    </div>
    <WindowConsole class="rounded-lg shadow-lg object-cover z-10">
      <slot name="window" />
    </WindowConsole>
    <div
      class="bottom"
    >
      <slot name="bottom" />
    </div>
    <LayoutFooter />
  </div>
</template>
