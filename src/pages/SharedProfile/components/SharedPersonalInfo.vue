<template>
  <profile-section headline="Personal Info">
    <profile-text-display label="Name" :value="name"></profile-text-display>
    <profile-text-display label="Age" :value="age"></profile-text-display>
    <profile-text-display label="Location" :value="location"></profile-text-display>
    <profile-text-display label="Bio" :value="bio"></profile-text-display>
  </profile-section>
</template>

<script>
import ProfileSection from '@/pages/components/ProfileSection.vue'
import ProfileTextDisplay from 'ProfileComponents/ProfileTextDisplay.vue'

export default {
  components: {
    ProfileSection,
    ProfileTextDisplay
  },
  computed: {
    name() {
      let name = this.$store.getters.sharedPersonalName
      if (name == null) return 'N/A'
      return name
    },
    age() {
      let age = this.$store.getters.sharedPersonalAge
      if (age == null) return 'N/A'
      return Math.floor(age) + ' years'
    },
    location() {
      let location = this.$store.getters.sharedPersonalLocation
      if (location == null) return 'N/A'
      return location
    },
    bio() {
      let bio = this.$store.getters.sharedPersonalBio
      if (bio == null) return 'N/A'
      return bio
    }
  }
}
</script>

<style>

</style>
