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
  background: url("https://firebasestorage.googleapis.com/v0/b/testproject-c8451.appspot.com/o/guild_wars_2_texture.jpg?alt=media&token=0a920063-00bc-4e0d-bc7b-26dc20eb1edb");
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

a:hover {
  text-decoration: underline;
}

b {
  font-weight: 600;
}

.section_content_link {
  text-decoration: underline !important;
}

.section_content {
  text-align: left;
  padding: 0 10px;
}

.section_content_headline {
  display: inline-block;
  margin: 0;
}

.section_content_text {
  margin: 0 0 10px 0;
}

.section_image_right {
  float: right;
  margin: 20px 0 20px 20px;
  border: 1px solid black;
}

.section_button {
  font-weight: 600;
  font-size: 20px;
  background: rgb(53, 86, 137);
  margin: 1px;
}

.section_button:hover {
  margin: 0;
  border: 1px solid white;
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
