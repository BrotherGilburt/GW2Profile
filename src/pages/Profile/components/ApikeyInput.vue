<template>
  <profile-section headline="API Key:">
    <div class="api_key_content">
      <form class="api_key_form" @submit.prevent="submitAPIKey">
        <div v-if="valid == false && edit == false">
          <span>You must enter a Guild Wars 2 API Key to create your profile</span>
          <div class="interface_group">
            <button class="blue_button" type="button" @click="editStart()">add a key</button>
          </div>
        </div>
        <div v-if="valid == false && edit == true">
          <feedback-input class="input_width" type="text" v-model="apikeyInput" @change="placeholderReset()" :error="error" :placeholder="placeholder" />
          <div class="interface_group">
            <button class="blue_button" type="submit">submit</button>
            <button class="blue_button" type="button" @click="editFinish()">cancel</button>
          </div>
        </div>
        <div v-if="valid == true && edit == false">
          <span>{{apiKeyPreview}}</span>
          <div class="interface_group">
            <button class="blue_button" type="button" @click="editStart()">edit</button>
          </div>
        </div>
        <div v-if="valid == true && edit == true">
          <span>{{apiKeyPreview}}</span>
          <div class="interface_group">
            <button class="blue_button" type="button" @click="deleteAPIkey()">delete</button>
            <button class="blue_button" type="button" @click="editFinish()">cancel</button>
          </div>
        </div>
      </form>
    </div>
  </profile-section>
</template>

<script>
import ProfileSection from '@/pages/components/ProfileSection.vue'
import FeedbackInput from '@/pages/components/FeedbackInput.vue'

export default {
  data() {
    return {
      apikeyInput: ''
    }
  },
  components: {
    ProfileSection,
    FeedbackInput
  },
  methods: {
    deleteAPIkey() {
      this.$store.dispatch('deleteApikey')
      this.$store.dispatch('deleteUserInfo')
    },
    submitAPIKey() {
      this.$store.dispatch("submitApikey", { value: this.apikeyInput })
      this.apikeyInput = ''
    },
    placeholderReset() {
      this.error = false
    },
    editStart() {
      this.edit = true
      this.apikeyInput = ''
    },
    editFinish() {
      this.edit = false
      this.error = false
    }
  },
  computed: {
    apikey() {
      return this.$store.getters.apikeyValue
    },
    placeholder() {
      if (this.error === true) return 'invalid api key'
      return 'Enter a valid Guild Wars 2 API Key'
    },
    valid() {
      return this.apikey != null && this.apikey != undefined;
    },
    error: {
      get() {
        return this.$store.getters.apikeyError
      },
      set(error) {
        this.$store.dispatch('errorApikey', { error })
      }
    },
    edit: {
      get() {
        return this.$store.getters.apikeyEdit;
      },
      set(edit) {
        this.$store.dispatch('editApikey', { edit })
      }
    },
    apiKeyPreview() {
      return this.apikey.substring(0, 45) + "...";
    }
  }
};
</script>

<style scoped>
.input_width {
  width: 75% !important;
}

.api_key_content {
  position: relative;
  text-align: left;
}

.interface_group {
  height: 32px;
  margin-top: -16px;
  position: absolute;
  right: 0;
  top: 50%;
}
</style>