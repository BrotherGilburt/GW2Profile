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
      //TODO: Update values in the store.
      this.edit = false
    },
    editCancel() {
      //TODO: Reset values to those in the store.
      this.edit = false
    }
  },
  computed: {
    storedName() {
      //Get name from store.
      return 'Perry' //TODO
    },
    storedAge() {
      //Get from, store.
      return '26' //TODO
    },
    storedLocation() {
      //Get from store.
      return 'Illinois' //TODO
    },
    storedBio() {
      //Get from store.
      return 'I am a banana.' //TODO
    }
  },
  watch: {
    storedName() {
      this.name = this.storedName
    },
    storedAge() {
      this.age = this.storedAge
    },
    storedLocation() {
      this.location = this.storedLocation
    },
    storedBio() {
      this.bio = this.storedBio
    }
  },
  mounted() {
    //Set display values from store
    this.name = this.storedName
    this.age = this.storedAge
    this.location = this.storedLocation
    this.bio = this.storedBio
  }
}
</script>

<style>

</style>
