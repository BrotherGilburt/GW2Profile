<template>
  <account-info-section :name="name" :age="age" :ap="ap" :fractal="fractal" :wvw="wvw"></account-info-section>
</template>

<script>
import AccountInfoSection from '../../components/AccountInfoSection.vue'

export default {
  components: {
    AccountInfoSection
  },
  computed: {
      name() {
          let name = this.$store.getters.sharedAccount.name
          if (name === null) return 'N/A'
          return name
      },
      age() {
          let age = this.$store.getters.sharedAccount.age
          if (age != null && age != undefined)
            return Math.floor(age/60/60) + ' hours'
          else
            return 'N/A'
      },
      ap() {
          let ap = this.$store.getters.sharedAccount.ap.toString()
          if (ap === null) return 'N/A'
          return ap
      },
      fractal() {
          let fractal = this.$store.getters.sharedAccount.fractal.toString()
          if (fractal === null) return 'N/A'
          return fractal
      },
      wvw() {
          let wvw = this.$store.getters.sharedAccount.wvw.toString()
          if (wvw === null) return 'N/A'
          return wvw
      }
  }
}
</script>
