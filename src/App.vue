<script setup>
import Background from "./components/Background.vue";
import PageContainer from "./components/PageContainer.vue";
import PageHeader from "./components/PageHeader.vue";
import LandingMain from "./components/LandingMain.vue";
</script>

<template>
  <Background>
    <PageContainer>
      <PageHeader />
      <LandingMain />
    </PageContainer>
  </Background>
</template>

<style scoped></style>
