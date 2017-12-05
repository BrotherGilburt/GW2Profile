<template>
    <account-info-section :name="name" :age="age" :ap="ap" :fractal="fractal" :wvw="wvw"></account-info-section>
</template>

<script>
import AccountInfoSection from '../../components/AccountInfoSection.vue'

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
      this.loadContent()
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
          let name = this.$store.getters.account.name
          if (name == null)
            return 'N/A'
          else
            return name
      },
      age() {
          let age = this.$store.getters.account.age
          if (age != null && age != undefined)
            return Math.floor(age/60/60) + ' hours'
          else
            return null
      },
      ap() {
          let ap = this.$store.getters.account.ap
          if (ap == null)
            return 'N/A'
          else
            return ap
      },
      fractal() {
          let fractal = this.$store.getters.account.fractal
          if (fractal == null)
            return 'N/A'
          else
            return fractal.toString()
      },
      wvw() {
          let wvw = this.$store.getters.account.wvw
          if (wvw == null)
            return 'N/A'
          else
            return wvw.toString()
      }
  }
}
</script>