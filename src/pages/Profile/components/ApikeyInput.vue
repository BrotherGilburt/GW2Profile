<template>
  <profile-section headline="API Key:">
    <add-remove-buttons slot="profile_section_buttons" class="profile_section_buttons" :editMode="editMode" :itemAdded="valid" @start="editStart()" @add="submitAPIKey()" @cancel="editFinish()" @remove="deleteAPIkey()" />
    <span v-if="!valid && !editMode">Enter a Guild Wars 2 API Key to create your profile</span>
    <profile-text-input v-else label="Key" :truncated="true" v-model="apikey" :max="72" :edit="editMode" :errorMessage="errorMessage"/>
  </profile-section>
</template>

<script>
import ProfileSection from '@/pages/components/ProfileSection.vue'
import ProfileTextInput from './ProfileTextInput.vue'
import AddRemoveButtons from '@/pages/components/Buttons/AddRemoveButtons.vue'

export default {
  data() {
    return {
      apikey: '',
      editMode: false
    }
  },
  components: {
    ProfileSection,
    ProfileTextInput,
    AddRemoveButtons
  },
  methods: {
    deleteAPIkey() {
      /*Deleting the Apikey deletes the entire profile*/
      this.$store.dispatch('deleteProfile')
    },
    submitAPIKey() {
      this.$store.dispatch('submitApikey', { value: this.apikey })
    },
    editStart() {
      this.apikey = ''
      this.editMode = true
    },
    editFinish() {
      this.editMode = false
    },
    setToStore() {
      this.apikey = this.storedApikey || ''
    }
  },
  computed: {
    errorMessage() {
      if (this.storedApikeyStatus === 'error') {
        this.apikey = ''
        return 'invalid api key'
      }
      return ''
    },
    storedApikey() {
      return this.$store.getters.apikeyValue
    },
    storedApikeyStatus() {
      return this.$store.getters.apikeyStatus
    },
    valid() {
      return this.storedApikey != null
    }
  },
  mounted() {
    this.setToStore()
  },
  watch: {
    storedApikey() {
      if (this.apikey !== this.storedApikey) {
        this.setToStore()
        this.editMode = false
      }
    },
    storedApikeyStatus() {
      if (this.storedApikeyStatus === 'success') {
        this.editMode = false
      }
    }
  }
}
</script>