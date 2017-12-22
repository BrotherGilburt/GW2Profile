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
                <input v-bind:class="emailInputClass"
                       v-model="email"
                       v-on:keyup="placeholderReset('email')"
                       type="text" v-bind:placeholder="emailPlaceholder"/>
              </td>
              <td>
                <input v-bind:class="passwordInputClass"
                       v-model="password"
                       v-on:keyup="placeholderReset('password')"
                       type="password" v-bind:placeholder="passwordPlaceholder"/>
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
const EMAIL_PLACEHOLDER = 'Email'
const PASSWORD_PLACEHOLDER = 'Password'

export default {
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
      if (type === 'email' && this.emailPlaceholder !== EMAIL_PLACEHOLDER && this.email.length > 0) {
        this.$store.dispatch('clearError')
      }
      if (type === 'password' && this.passwordPlaceholder !== PASSWORD_PLACEHOLDER && this.password.length > 0) {
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
    emailInputClass() {
      return {
        loginTextInput: true,
        loginTextError: (this.emailPlaceholder !== EMAIL_PLACEHOLDER)
      };
    },
    passwordInputClass() {
      return {
        loginTextInput: true,
        loginTextError: (this.passwordPlaceholder !== PASSWORD_PLACEHOLDER)
      };
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

.loginTextInput {
  border: 1px solid black;
  padding: 2px;
}

.loginTextError::placeholder {
  color: red;
  opacity: 1;
}
</style>
