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

<style>
html,
body {
  padding: 0;
  margin: 0;
}

body {
  background-image: url("https://firebasestorage.googleapis.com/v0/b/testproject-c8451.appspot.com/o/guild_wars_2_background.jpg?alt=media&token=5bdc7f3f-7948-4026-97db-8c7649da5508");
  background-attachment: fixed;
  background-position: 50%;
  background-size: auto 150%;
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
  background: black;
  float: right;
  margin: 20px 0 20px 20px;
  border: 1px solid black;
}

.blue_button {
  border: none;
  font-size: 16px;
  color: inherit;
  padding: 3px 8px 3px 8px;
  font-weight: 600;
  font-size: 20px;
  background: rgb(53, 86, 137);
  margin: 1px;
}

.blue_button:hover {
  margin: 0;
  border: 1px solid white;
}

.section_button:hover {
  margin: 0;
  border: 1px solid white;
}

.center-section {
  width: 900px;
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
</style>
