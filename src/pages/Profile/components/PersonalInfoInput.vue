<template>
  <profile-section headline="Personal Info:" :enableEdit="true" @edit="editStart" @done="editDone" @cancel="editCancel">
    <profile-text-input label="Name" v-model="name" :edit="edit" :max="19" />
    <profile-text-input label="Age" v-model="age" :edit="edit" :max="2" />
    <profile-text-input label="Location" v-model="location" :edit="edit" :max="19" />
    <profile-text-input label="Bio" v-model="bio" :edit="edit" :max="19" />
  </profile-section>
</template>

<script>
import ProfileSection from '@/pages/components/ProfileSection.vue'
import ProfileTextInput from './ProfileTextInput.vue'

export default {
  components: {
      ProfileSection,
      ProfileTextInput
  },
  data() {
    return {
      edit: false,
      name: null,
      age: null,
      location: null,
      bio: null
    }
  },
  methods: {
    editStart() {
      this.edit = true
    },
    editDone() {
      this.$store.dispatch('updatePersonalInfo', {name: this.name, age: this.age, location: this.location, bio: this.bio})
      this.edit = false
    },
    editCancel() {
      setToStore()
      this.edit = false
    },
    setToStore() {
      this.name = this.storedName
      this.age = this.storedAge
      this.location = this.storedLocation
      this.bio = this.storedBio
    }
  },
  computed: {
    storedName() {
      return this.$store.getters.personalName
    },
    storedAge() {
      return this.$store.getters.personalAge
    },
    storedLocation() {
      return this.$store.getters.personalLocation
    },
    storedBio() {
      return this.$store.getters.personalBio
    }
  },
  mounted() {
    this.$store.dispatch('loadPersonalInfo')
    this.setToStore()
  }
}
</script>

<style>

</style>
