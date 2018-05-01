<template>
  <main-section headline="Sign In">
    <form @submit.prevent="signIn()">
      <table class="section_content_table">
        <tr>
          <td>
            <text-input v-model="email"  :errorMessage="emailErrorMessage" :placeholder="'email'" />
          </td>
        </tr>
        <tr>
          <td>
            <text-input :type="'password'" v-model="password" :errorMessage="passwordErrorMessage" :placeholder="'password'" />
          </td>
        </tr>
        <tr>
          <td>
            <button class="blue_button" type="submit">sign in</button>
          </td>
        </tr>
      </table>
    </form>
  </main-section>
</template>

<script>
import MainSection from '@/pages/components/MainSection.vue'
import TextInput from '@/pages/components/TextInput/TextInput.vue'

export default {
  components: {
    MainSection,
    TextInput
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
    }
  },
  watch: {
    status() {
      if (this.status === true) this.$router.push('/profile')
    },
    email() {
      if (this.loginError.type == 'email' || this.loginError.type == 'both') {
        this.$store.dispatch('clearError')
      }
    },
    password() {
      if (this.loginError.type == 'password' || this.loginError.type == 'both') {
        this.$store.dispatch('clearError')
      }
    }
  },
  computed: {
    loginError() {
      return this.$store.getters.loginError
    },
    status() {
      return this.$store.getters.status
    },
    emailErrorMessage() {
      if (this.loginError.type == 'email' || this.loginError.type == 'both') {
        return this.loginError.message
      }
      return ''
    },
    passwordErrorMessage() {
      if (this.loginError.type == 'password') {
        return this.loginError.message
      }
      return ''
    }
  }
}
</script>
