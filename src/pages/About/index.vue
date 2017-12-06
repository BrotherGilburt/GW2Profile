<template>
  <main-section headline="About">
    <div class="section_content">
      <img class="about_perry_image section_image_right" src="https://firebasestorage.googleapis.com/v0/b/testproject-c8451.appspot.com/o/PerryThePlatypus.jpg?alt=media&token=97dc95b1-0c2d-49a7-a232-c85d6334822d" alt="Perry the Platypus" width="411.3" height="200">
      <p class="section_content_text">
        GW2 Profile was created by Perry as a project for IT354 at Illinois
        State University. This site uses
        <a class="section_content_link" href="https://vuejs.org/">Vue.js</a>
        for the front-end and
        <a class="section_content_link" href="https://firebase.google.com/">Firebase</a>
        for the backend.
      </p>
      <h3 class="section_content_headline">Contact:</h3>
      <p class="section_content_text">
        <b>Email:</b> pdk(at)fake.com <br>
        <b>Phone:</b> 555-555-5555
      </p>
    </div>
  </main-section>
</template>

<script>
import MainSection from '../components/MainSection.vue'

export default {
  data() {
      return {}
  },
  components: {
      MainSection
  }
}
</script>

<style scoped>

.about_perry_image {
  height: 225px;
}
</style>
