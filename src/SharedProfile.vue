<template>
  <main-section headline="Shared Profile">
    <span>{{uid}}</span>
  </main-section>
</template>

<script>
import MainSection from './components/MainSection.vue'

export default {
  components: {
    MainSection
  },
  computed: {
      uid() {
          return this.$route.params.uid
      }
  }
}
</script>

<style scoped>

</style>
