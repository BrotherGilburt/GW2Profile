<template>
  <profile-section headline="Account Info">
    <profile-text-display label="Account" :value="name"></profile-text-display>
    <profile-text-display label="Age" :value="age"></profile-text-display>
    <profile-text-display label="Achievement Points" :value="ap"></profile-text-display>
    <profile-text-display label="Fractal Level" :value="fractal"></profile-text-display>
    <profile-text-display label="WvW Rank" :value="wvw"></profile-text-display>
  </profile-section>
</template>

<script>
import ProfileSection from '@/pages/components/ProfileSection.vue'
import ProfileTextDisplay from 'ProfileComponents/ProfileTextDisplay.vue'

export default {
  components: {
    ProfileTextDisplay,
    ProfileSection
  },
  computed: {
      name() {
          let name = this.$store.getters.sharedAccountName
          if (name == null) return 'N/A'
          return name
      },
      age() {
          let age = this.$store.getters.sharedAccountAge
          if (age != null && age != undefined)
            return Math.floor(age/60/60) + ' hours'
          else
            return 'N/A'
      },
      ap() {
          let ap = this.$store.getters.sharedAccountAp
          if (ap === null) return 'N/A'
          return ap.toString()
      },
      fractal() {
          let fractal = this.$store.getters.sharedAccountFractal
          if (fractal === null) return 'N/A'
          return fractal.toString()
      },
      wvw() {
          let wvw = this.$store.getters.sharedAccountWvw
          if (wvw === null) return 'N/A'
          return wvw.toString()
      }
  }
}
</script>
