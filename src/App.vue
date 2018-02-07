<template>
  <div id="app">
    <header>
      <banner-section></banner-section>
    </header>
    <nav>
      <navigation-section></navigation-section>
    </nav>
    <main>
      <router-view class="page_width"></router-view>
    </main>
    <footer class="page_width">
      Site by Perry, 2017-2018
    </footer>
  </div>
</template>

<script>
import BannerSection from "@/pages/components/BannerSection.vue";
import NavigationSection from "@/pages/components/NavigationSection.vue";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    BannerSection,
    NavigationSection
  }
};
</script>

<style src="@/styles/main.css"></style>
