<script setup lang="ts">

import Home from "~/components/Home.vue";
import AboutMe from "~/components/AboutMe.vue";
import Experience from "~/components/Experience.vue";
import Portfolio from "~/components/Portfolio.vue";
import Contact from "~/components/Contact.vue";

</script>

<template>
  <main>
      <home id="home" ref="homeTarget" />
      <about-me id="about-me" ref="aboutMeTarget"/>
      <experience id="experience" ref="experienceTarget"/>
      <portfolio id="portfolio" ref="portfolioTarget"/>
      <contact id="contact" ref="contactTarget"/>
  </main>
</template>

<style scoped>
.active {
  font-weight: bold;
  color: #f9a826;
}
</style>