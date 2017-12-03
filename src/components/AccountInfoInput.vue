<template>
    <account-info-section :name="name" :age="age" :ap="ap" :fractal="fractal" :wvw="wvw"></account-info-section>
</template>

<script>
import AccountInfoSection from './AccountInfoSection.vue'

export default {
  data() {
      return {}
  },
  components: {
      AccountInfoSection
  },
  methods: {
      loadContent() {
        if (this.isKey == true) {
            this.$store.dispatch('loadAccountInfo')
        }
      }
  },
  mounted() {
      
  },
  watch: {
      isKey: function() {
          this.loadContent()
      }
  },
  computed: {
      isKey() {
          let apikey = this.$store.getters.apikey.value
          return apikey != null && apikey != undefined
      },
      name() {
          return this.$store.getters.account.name
      },
      age() {
          let age = this.$store.getters.account.age
          if (age != null && age != undefined)
            return Math.floor(age/60/60) + ' hours'
          else
            return null
      },
      ap() {
          return this.$store.getters.account.ap
      },
      fractal() {
          return this.$store.getters.account.fractal
      },
      wvw() {
          return this.$store.getters.account.wvw
      }
  }
}
</script>