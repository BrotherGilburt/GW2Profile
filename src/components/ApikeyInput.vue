<template>
    <div class="api-key-content">
        <form class="api-key-form" v-on:submit.prevent="submitAPIKey">
            <table>
                <tr v-if="valid == false && edit == false">
                    <td><span>You must enter a Guild Wars 2 API Key to create your profile</span></td>
                    <td><button class="api-key-button" type="button" v-on:click="editStart">add a key</button></td>
                </tr>
                <tr v-if="valid == false && edit == true">
                    <td><label>API Key:</label></td>
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
                    <td><label>API Key:</label></td>
                    <td>{{apiKeyPreview}}</td>
                    <td><button class="api-key-button" type="button" v-on:click="editStart">edit</button></td>
                </tr>
                <tr v-if="valid == true && edit == true">
                    <td><label>API Key:</label></td>
                    <td>{{apiKeyPreview}}</td>
                    <td>
                        <button class="api-key-button" v-on:click="deleteAPIKey" type="button">delete</button>
                    </td>
                    <td><button class="api-key-button" type="button" v-on:click="editFinish">cancel</button></td>
                </tr>
            </table>
        </form>
    </div>
</template>

<script>
import * as firebase from "firebase";

export default {
  data() {
    return {
      edit: false,
      apikeyInput: '',
      apiInputHolder: "Enter a valid Guild Wars 2 API Key"
    };
  },
  methods: {
    setAPIKey() {
      let userid = firebase.auth().currentUser.uid;
      let path = "/users/" + userid + "/apikey";
      firebase.database().ref(path).set(this.apikey);
      this.edit = false;
      this.$store.dispatch("changeApikey", {
        value: this.apikeyInput,
        error: false
      })
    },
    setAPIError() {
      //Error message
      this.$store.dispatch("changeApikey", {
        value: this.apikey,
        error: true
      })
      this.apikeyInput = '';
      this.apiInputHolder = "Invalid API Key";
      this.edit = true;
    },
    deleteAPIKey() {
      let userid = firebase.auth().currentUser.uid;
      let path = "/users/" + userid + "/apikey";
      firebase.database().ref(path).remove();
      this.apikeyInput = '';
      this.$store.dispatch("changeApikey", {
        value: null,
        error: false
      })
      this.edit = false;
    },
    submitAPIKey() {
      let path =
        "https://api.guildwars2.com/v2/tokeninfo?access_token=" + this.apikeyInput
      $.ajax({
        url: path,
        success: () => {
          this.setAPIKey()
        },
        error: () => {
          this.setAPIError()
        }
      })
    },
    placeholderReset() {
      if (this.apikeyInput.length <= 0) return

      this.$store.dispatch('changeApikey', {
        value: this.apikey,
        error: false
      })
      this.apiInputHolder = 'Enter a valid Guild Wars 2 API Key';
    },
    editStart() {
      this.edit = true;
    },
    editFinish() {
      this.edit = false;
    }
  },
  mounted() {
    let userid = firebase.auth().currentUser.uid;
    let path = '/users/' + userid + '/apikey';
    firebase.database()
      .ref(path)
      .once('value')
      .then(data => {
        this.$store.dispatch('changeApikey', {
          value: data.val(),
          error: false
        });
      });
  },
  computed: {
    apikey() {
      return this.$store.getters.apikey.value;
    },
    valid() {
      return this.apikey != null && this.apikey != undefined;
    },
    inputError() {
      return this.$store.getters.apikey.error;
    },
    apiKeyPreview() {
      return this.apikey.substring(0, 40) + "...";
    },
    apiInputClass() {
      return {
        "input-api": true,
        "input-api-error": this.inputError
      };
    }
  }
};
</script>

<style scoped>

</style>