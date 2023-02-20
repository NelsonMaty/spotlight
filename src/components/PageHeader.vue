<template>
  <header>
    <div class="pt-6 w-full pointer-events-auto">
      <div class="mx-auto max-w-7xl lg:px-8 sm:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-5xl duration-1000  ">
          <div class="flex gap-4">
            <div class="flex flex-1"></div>
            <div class="flex flex-1 md:justify-center justify-end">
              <MenuButton class="md:hidden"/>
              <NavList class="hidden md:block"/>
            </div>
            <div class="flex md:flex-1 justify-end lg:-mt-1">
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

<style lang="scss" scoped>

</style>