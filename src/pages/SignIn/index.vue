<template>
  <main-section headline="Sign In">
    <form @submit.prevent="signIn()">
      <table class="section_content_table">
        <tr>
          <td>
            <feedback-input v-model="email" @change="placeholderReset('email')" :error="isEmailError" :placeholder="emailPlaceholder" />
          </td>
        </tr>
        <tr>
          <td>
            <feedback-input type="password" v-model="password" @change="placeholderReset('password')" :error="isPasswordError" :placeholder="passwordPlaceholder" />
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
import FeedbackInput from '@/pages/components/FeedbackInput.vue'

const EMAIL_PLACEHOLDER = 'Email'
const PASSWORD_PLACEHOLDER = 'Password'

export default {
  components: {
    MainSection,
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
    resetFields() {
      this.email = ''
      this.password = ''
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
      if (this.isError === true) this.resetFields()
    },
    status() {
      if (this.status === true) this.$router.push('/profile')
    }
  },
  computed: {
    isError() {
      return this.$store.getters.isLoginError
    },
    status() {
      return this.$store.getters.status
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
}
</script>

<style>

</style>
