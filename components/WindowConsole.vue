<template>
  <div class="console bg-gray-500 text-white text-xs pt-4 rounded-md relative">
    <ul class="absolute grid grid-cols-3 gap-3 top-2 left-4">
      <li class="!m-0 rounded w-2 h-2 bg-red-400 inline-block">
        &nbsp;
      </li>
      <li class="!m-0 rounded w-2 h-2 bg-yellow-300 inline-block">
        &nbsp;
      </li>
      <li class="!m-0 rounded w-2 h-2 bg-green-500 inline-block">
        &nbsp;
      </li>
    </ul>
    <slot />
  </div>
</template>
