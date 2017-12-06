<template>
  <main-section headline="Home">
    <div class="section_content">
      <img class="section_image_right home_image_logo" src="https://guildwars2.staticwars.com/wp-content/themes/guildwars2.com-live/img/gw2-logo.a9bed23d.jpg" alt="Guild Wars 2 Logo" width="292" height="200">
      <h2 class="section_content_headline">Welcome!</h2>
      <p class="section_content_text">Welcome to GW2Profile, where you
        can create a profile to easily share your Guild Wars 2 account
        information with friends!
      </p>
      <p class="section_content_text">
        To create a profile please sign up for an account.
        Then go to the profile page and add a valid Guild 
        Wars 2 AP key.</p>
        <p class="section_content_text">You can generate an AP key for your
        Guild Wars 2 account via the official
        <a class="section_content_link" href="https://www.guildwars2.com/en/">Guild Wars 2</a>
        website. From the home page click "Services", then "My Account",
        sign in, and go to the "Applications" tab. Click new key and check
        all the boxes for the best results!
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
.home_image_logo {
  height: 200px;
}
</style>
