<template>
  <profile-section headline="Account Info:">
    <profile-text-display label="Account" :value="name" />
    <profile-text-display label="Age" :value="age" />
    <profile-text-display label="Achievement Points" :value="ap" />
    <profile-text-display label="Fractal Level" :value="fractal" />
    <profile-text-display label="WvW Rank" :value="wvw" />
  </profile-section>
</template>

<script>
import AccountInfoSection from '@/pages/components/AccountInfoSection.vue'
import ProfileSection from '@/pages/components/ProfileSection.vue'
import ProfileTextDisplay from './ProfileTextDisplay.vue'

export default {
  data() {
      return {}
  },
  components: {
      ProfileSection,
      ProfileTextDisplay
  },
  mounted() {
      this.$store.dispatch('loadAccountInfo')
  },
  computed: {
      isKey() {
          let apikey = this.$store.getters.apikeyValue
          return apikey != null && apikey != undefined
      },
      name() {
          let name = this.$store.getters.accountName
          if (name == null)
            return 'N/A'
          else
            return name
      },
      age() {
          let age = this.$store.getters.accountAge
          if (age != null && age != undefined)
            return Math.floor(age/60/60) + ' hours'
          else
            return null
      },
      ap() {
          let ap = this.$store.getters.accountAp
          if (ap == null)
            return 'N/A'
          else
            return ap.toString()
      },
      fractal() {
          let fractal = this.$store.getters.accountFractal
          if (fractal == null)
            return 'N/A'
          else
            return fractal.toString()
      },
      wvw() {
          let wvw = this.$store.getters.accountWvw
          if (wvw == null)
            return 'N/A'
          else
            return wvw.toString()
      }
  }
}
</script>