<template>
  <div class="banner">
    <div class="center-section banner-flex">
      <div class="bannerLeft">
        <router-link to="/"><span class="bannerTitle">GW2 Profile</span></router-link>
      </div>
      <div class="bannerRight" v-if="!status">
        <form v-on:submit.prevent="signIn">
          <table>
            <tr>
              <td>
                <feedback-input v-model="email" @change="placeholderReset('email')" :error="isEmailError" :placeholder="emailPlaceholder" />
              </td>
              <td>
                <feedback-input type="password" v-model="password" @change="placeholderReset('password')" :error="isPasswordError" :placeholder="passwordPlaceholder"/>
              </td>
              <td>
                <button class="blue_button" type="submit">sign in</button>
              </td>
              <td>
                <button class="blue_button" type="button" v-on:click="signUp">sign up</button>
              </td>
            </tr>
          </table>
        </form>
      </div>
      <div class="bannerRight" v-if="status">
        <span class="loginMessage">{{displayEmail}} </span>
        <button class="blue_button" type="button" v-on:click="signOut">sign out</button>
      </div>
    </div>
  </div>
</template>

<script>
import FeedbackInput from './FeedbackInput.vue'
const EMAIL_PLACEHOLDER = 'Email'
const PASSWORD_PLACEHOLDER = 'Password'

export default {
  components: {
    FeedbackInput
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn() {
      this.$store.dispatch('signIn', {email: this.email, password: this.password})
    },
    signUp() {
      this.$store.dispatch('signUp', {email: this.email, password: this.password})
    },
    signOut() {
      this.$store.dispatch('signOut')
    },
    placeholderReset(type) {
      if (type === 'email' && this.emailPlaceholder !== EMAIL_PLACEHOLDER) {
        this.$store.dispatch('clearError')
      }
      if (type === 'password' && this.passwordPlaceholder !== PASSWORD_PLACEHOLDER) {
        this.$store.dispatch('clearError')
      }
    }
  },
  watch: {
    isError() {
      if (this.isError === true) {
        this.email = ''
        this.password = ''
      }
    },
    status() {
      this.email = ''
      this.password = ''
    }
  },
  computed: {
    status() {
      return this.$store.getters.status
    },
    displayEmail() {
      return this.$store.getters.email
    },
    isError() {
      return this.$store.getters.isLoginError
    },
    emailPlaceholder() {
      let placeholder = this.$store.getters.loginEmailError
      if (placeholder != null) return placeholder
      placeholder = this.$store.getters.loginBothError
      if (placeholder != null) return placeholder
      return EMAIL_PLACEHOLDER
    },
    passwordPlaceholder() {
      let placeholder = this.$store.getters.loginPasswordError
      if (placeholder != null) return placeholder
      return PASSWORD_PLACEHOLDER
    },
    isEmailError() {
      return this.emailPlaceholder !== EMAIL_PLACEHOLDER
    },
    isPasswordError() {
      return this.passwordPlaceholder !== PASSWORD_PLACEHOLDER
    }
  }
};
</script>

<style scoped>
.banner {
  color: white;
  background: rgba(28,28,38,0.75);
  height: 150px;
  min-width: 600px;
}

.banner-flex {
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.bannerLeft {
  padding: 5px 15px 0 15px;
  background: #0b0b0f;
  align-self: flex-end;
  float: left;
  white-space: nowrap;
}

.bannerRight {
  padding: 10px;
  background: #0b0b0f;
  align-self: flex-end;
  float: right !important;
}

.bannerTitle {
  font-size: 36px;
  font-weight: bold;
}

.loginMessage {
  font-weight: 580;
  color: white;
}
</style>
