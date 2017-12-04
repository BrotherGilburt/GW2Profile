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
          return "placeholder"
      },
      age() {
          return 'x hours'
      },
      ap() {
          return 'placeholder'
      },
      fractal() {
          return 'fplaceholder'
      },
      wvw() {
          return 'wvwplaceholder'
      }
  }
}
</script>
