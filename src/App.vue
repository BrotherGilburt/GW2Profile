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
  font-family: Helvetica, Arial, sans-serif;
  font-size: 20px;
  color: white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

footer {
  background-color: #0b0b0f;
  padding: 5px 0;
  color: inherit;
  text-align: center;
}

a, a:visited {
  color: inherit;
}

a {
  word-wrap: break-word;
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

.section_content_link:hover {
  color: lightgray;
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

.section_content_table {
  background-color: rgba(11,11,15);
  margin: auto;
  padding: 10px 30px;
  width: 90%;
  max-width: 400px;
}

.section_content_table td {
  padding: 4px;
}

.section_image_right {
  background: black;
  float: right;
  margin: 20px 0 20px 20px;
  border: 1px solid black;
}

.right_section, .left_section, .full_section {
  box-sizing: border-box;
}

.right_section, .left_section {
  width: 50%;
}

.full_section {
  width: 100%;
}

.right_section {
  padding-left: 10px;
}

.left_section {
  padding-right: 10px;
}

.action_link {
  display: block;
  float: right;
  margin-right: 2px;
  color: rgb(182, 194, 214);
  cursor: pointer;
}

.blue_button, .section_button {
  box-sizing: border-box;
  cursor: pointer;
  color: white;
  border: 1px solid rgb(53, 86, 137);
  background: rgb(53, 86, 137);
}

.blue_button {
  height: 30px;
  font-size: 16px;
  padding: 3px 8px 3px 8px;
  font-weight: 600;
  font-size: 20px;
}

.section_button {
  height: 25px;
  font-size: 18px;
  padding: 0 3px;
  float: right;
}

.blue_button:hover, .section_button:hover {
  border: 1px solid white;
}

.page_width {
  max-width: 900px;
  min-width: 320px;
  margin: auto;
}

.table_label {
  vertical-align: top;
  padding-right: 5px;
  text-align: right;
  font-weight: bold;
}

@media all and (max-width: 750px) {
  .left_section, .right_section {
    padding-right: 0 !important;
    padding-left: 0 !important;
    width: 100%;
  }
}
</style>
