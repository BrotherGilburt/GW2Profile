<template>
  <profile-section headline="Personal Info:">
    <edit-buttons class="profile_section_buttons" slot="profile_section_buttons" :editMode="edit" @edit="editStart" @done="editDone" @cancel="editCancel"></edit-buttons>
    <profile-text-input label="Name" v-model="name" :edit="edit" :max="19" />
    <profile-text-input label="Age" v-model="age" :edit="edit" :max="2" />
    <profile-text-input label="Location" v-model="location" :edit="edit" :max="19" />
    <profile-text-input label="Bio" v-model="bio" :edit="edit" :max="19" />
  </profile-section>
</template>

<script>
import ProfileSection from '@/pages/components/ProfileSection.vue'
import ProfileTextInput from './ProfileTextInput.vue'
import EditButtons from '@/pages/components/Buttons/EditButttons.vue'

export default {
  components: {
      ProfileSection,
      ProfileTextInput,
      EditButtons
  },
  data() {
    return {
      edit: false,
      name: '',
      age: '',
      location: '',
      bio: ''
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
      this.setToStore()
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
      let name = this.$store.getters.personalName
      if (name == null) return ''
      return name
    },
    storedAge() {
      let age = this.$store.getters.personalAge
      if (age == null) return ''
      return age
    },
    storedLocation() {
      let location = this.$store.getters.personalLocation
      if (location == null) return ''
      return location
    },
    storedBio() {
      let bio = this.$store.getters.personalBio
      if (bio == null) return ''
      return bio 
    },
    storeStatus() {
      return this.$store.getters.personalStatus
    }
  },
  watch: {
    storeStatus() {
      if (this.storeStatus == true) this.setToStore()
    }
  },
  mounted() {
    this.$store.dispatch('loadPersonalInfo')
    this.setToStore()
  }
}
</script>
