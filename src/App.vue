<template>
  <div id="app">
    <header>
      <banner-section></banner-section>
    </header>
    <nav>
      <navigation-section></navigation-section>
    </nav>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      
    </footer>
  </div>
</template>

<script>
import BannerSection from "./pages/components/BannerSection.vue";
import NavigationSection from "./pages/components/NavigationSection.vue";

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

<style>
html,
body {
  padding: 0;
  margin: 0;
}

body {
  background: url("./assets/guild_wars_2_texture.jpg");
  background-position: 50% 0%;
  background-attachment: fixed;
  background-repeat: repeat;
  background-color: #29293a;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


a, a:visited {
  color: white;
}

a {
  text-decoration: none;
}

.center-section {
  min-width: 600px;
  max-width: 900px;
  margin: auto;
}

table {
  white-space: nowrap;
}

.loginMessage {
  font-weight: 580;
}

.loginTextInput {
  border: 1px solid black;
  padding: 2px;
}

.loginTextError::placeholder {
  color: red;
  opacity: 1;
}

button {
  font-size: 16px;
  color: inherit;
  background-color: #0b0b0f;
  border: none;
  padding: 3px 8px 3px 8px;
}

button:active {
  background-color: darkgray;
}
</style>
