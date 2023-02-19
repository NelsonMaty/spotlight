<template>
  <header>
    <div class="pt-6 w-full pointer-events-auto">
      <div class="mx-auto max-w-7xl lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-5xl duration-1000 transition-all ">
          <div class="flex gap-4">
            <div class="flex flex-1"></div>
            <div class="flex flex-1">
              <NavList />
            </div>
            <div class="flex flex-1 justify-end -mt-1">
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
import NavList from "./NavList.vue";

</script>

<style lang="scss" scoped>

</style>