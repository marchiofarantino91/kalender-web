<template>
  <div data-theme="dark" class="h-[100dvh]">
    <div class="navbar bg-base-100">
      <nuxt-link href="/" class="btn btn-ghost text-xl">Kalender</nuxt-link>
    </div>
    <UContainer class="container px-5">
      <slot />
    </UContainer>
  </div>
</template>
