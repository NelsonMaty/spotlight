<template>
  <header>
    <div class="pointer-events-auto w-full px-4 pt-6 sm:px-8 lg:px-12">
      <div class="mx-auto max-w-7xl">
        <div class="mx-auto max-w-2xl lg:max-w-5xl">
          <div class="flex gap-4">
            <div class="flex flex-1"></div>
            <div class="flex flex-1 justify-end md:justify-center">
              <MenuButton class="md:hidden" />
              <NavList class="hidden md:block" />
            </div>
            <div class="flex justify-end md:flex-1 lg:-mt-1">
              <DarkModeButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import DarkModeButton from "./DarkModeButton.vue";
import MenuButton from "./MenuButton.vue";
import NavList from "./NavList.vue";
</script>

<style lang="scss" scoped></style>
