<template>
  <profile-section headline="Personal Info:" :enableEdit="true" @edit="editModeChange">
    <div v-show="!edit">View Mode</div>
    <div v-show="edit">Edit Mode</div>
  </profile-section>
</template>

<script>
import ProfileSection from '@/pages/components/ProfileSection.vue'

export default {
  components: {
      ProfileSection
  },
  data() {
    return {
      edit: false
    }
  },
  methods: {
    editModeChange(value) {
      this.edit = value
    }
  }
}
</script>

<style>

</style>
