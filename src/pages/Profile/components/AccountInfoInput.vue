<template>
    <account-info-section :name="name" :age="age" :ap="ap" :fractal="fractal" :wvw="wvw"></account-info-section>
</template>

<script>
import AccountInfoSection from '@/pages/components/AccountInfoSection.vue'

export default {
  data() {
      return {}
  },
  components: {
      AccountInfoSection
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