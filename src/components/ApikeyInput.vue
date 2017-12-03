<template>
  <profile-section headline="API Key:">
    <div class="api-key-content">
        <form class="api-key-form" v-on:submit.prevent="submitAPIKey">
            <table>
                <tr v-if="valid == false && edit == false">
                    <td><span>You must enter a Guild Wars 2 API Key to create your profile</span></td>
                    <td><button class="api-key-button" type="button" v-on:click="editStart">add a key</button></td>
                </tr>
                <tr v-if="valid == false && edit == true">
                    <td>
                        <input v-bind:class="apiInputClass"
                            v-model="apikeyInput" type="text" max="72"
                            v-on:keyup="placeholderReset"
                            v-bind:placeholder="apiInputHolder"/>
                    </td>
                    <td>
                        <button class="api-key-button" type="submit">submit</button>
                    </td>
                    <td><button class="api-key-button" type="button" v-on:click="editFinish">cancel</button></td>
                </tr>
                <tr v-if="valid == true && edit == false">
                    <td>{{apiKeyPreview}}</td>
                    <td><button class="api-key-button" type="button" v-on:click="editStart">edit</button></td>
                </tr>
                <tr v-if="valid == true && edit == true">
                    <td>{{apiKeyPreview}}</td>
                    <td>
                        <button class="api-key-button" v-on:click="deleteAPIKey" type="button">delete</button>
                    </td>
                    <td><button class="api-key-button" type="button" v-on:click="editFinish">cancel</button></td>
                </tr>
            </table>
        </form>
    </div>
  </profile-section>
</template>

<script>
import ProfileSection from './ProfileSection.vue'
import * as firebase from "firebase";

export default {
  data() {
    return {
      apikeyInput: '',
      apiInputHolder: "Enter a valid Guild Wars 2 API Key"
    };
  },
  components: {
    ProfileSection
  },
  methods: {
    deleteAPIKey() {
      this.$store.dispatch('deleteApikey')
      this.$store.dispatch('deleteUserInfo')
    },
    submitAPIKey() {
      this.$store.dispatch("submitApikey", {
        value: this.apikeyInput
      })
      this.apikeyInput = ''
    },
    placeholderReset() {
      if (this.apikeyInput.length <= 0) return

      this.error = false

      this.apiInputHolder = 'Enter a valid Guild Wars 2 API Key';
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
      return this.$store.getters.apikey.value;
    },
    valid() {
      return this.apikey != null && this.apikey != undefined;
    },
    error: {
      get() {
        return this.$store.getters.apikey.error;
      },
      set(error) {
        this.$store.dispatch('errorApikey', { error })
      }
    },
    edit: {
      get() {
        return this.$store.getters.apikey.edit;
      },
      set(edit) {
        this.$store.dispatch('editApikey', { edit })
      }
    },
    apiKeyPreview() {
      return this.apikey.substring(0, 40) + "...";
    },
    apiInputClass() {
      return {
        "input-api": true,
        "input-api-error": this.error
      };
    }
  }
};
</script>

<style scoped>
.input-api {
  width: 505px;
}

.input-api-error::placeholder {
  color: red;
  opacity: 1;
}

.api-key-content {
  position: relative;
  text-align: center;
  color: white;
  background-color: #0b0b0f;
  height: 40px;
}

.api-key-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.api-key-button {
  border: 1px solid white;
}
</style>