<template>
  <footer
    class="
      bg-barBottom
      flex
      absolute
      w-full
      bottom-0
      left-0
      py-0.5
      px-4
      text-sm
    "
  >
    <div
      v-if="$slidev.nav.currentLayout !== 'intro'"
      class="w-1/2 text-left"
    >
      <span
        v-if="$slidev.themeConfigs.title"
        class="px-2"
      >{{
        $slidev.themeConfigs.title
      }}</span>
    </div>
    <div
      v-if="$slidev.nav.currentLayout !== 'intro'"
      class="w-1/2 flex justify-end"
    >
      <span
        v-if="$slidev.themeConfigs.twitter"
        class="px-2"
      >
        <mdi-twitter /> @{{ $slidev.themeConfigs.twitter }}
      </span>
      <span
        v-if="$slidev.themeConfigs.github"
        class="px-2"
      >
        <mdi-github /> {{ $slidev.themeConfigs.github }}
      </span>
      <span class="px-2">
        {{ $slidev.nav.currentPage - 1 }} / {{ $slidev.nav.total - 1 }}
      </span>
    </div>
  </footer>
</template>
