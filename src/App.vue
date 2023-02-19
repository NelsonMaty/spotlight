<script setup>
import Background from "./components/Background.vue";
import DarkModeButton from "./components/DarkModeButton.vue";
import MainContainer from "./components/MainContainer.vue";
</script>

<template>
  <Background>
    <MainContainer>
      <DarkModeButton />
    </MainContainer>
  </Background>
</template>

<style scoped></style>
