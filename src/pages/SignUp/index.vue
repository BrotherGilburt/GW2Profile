<template>
  <main-section headline="Sign Up">
    <form @submit.prevent="signUp()">
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
            <feedback-input type="password" v-model="confirmPassword" @change="placeholderReset('confirmPassword')" :error="confirmPasswordError" :placeholder="confirmPasswordPlaceholder" />
          </td>
        </tr>
        <tr>
          <td>
            <button class="blue_button" type="submit">sign up</button>
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
const CONFIRM_PASSWORD_PLACEHOLDER = 'Confirm Password'

export default {
  components: {
    MainSection,
    FeedbackInput
  },
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      confirmPasswordError: false
    }
  },
  methods: {
    signUp() {
      if (this.password !== this.confirmPassword) {
        this.confirmPasswordError = true
        return
      }
      this.$store.dispatch('signUp', {email: this.email, password: this.password})
    },
    resetFields() {
      this.email = ''
      this.password = ''
      this.confirmPassword = ''
    },
    placeholderReset(type) {
      if (type === 'email' && this.emailPlaceholder !== EMAIL_PLACEHOLDER) {
        this.$store.dispatch('clearError')
      }
      if (type === 'password' && this.passwordPlaceholder !== PASSWORD_PLACEHOLDER) {
        this.$store.dispatch('clearError')
      }
      if (type === 'confirmPassword' && this.confirmPasswordError) {
        this.confirmPasswordError = false
      }
    }
  },
  watch: {
    isError() {
      if (this.isError === true) this.resetFields()
    },
    confirmPasswordError() {
      if (this.confirmPasswordError === true) this.resetFields()
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
    confirmPasswordPlaceholder() {
      if (this.confirmPasswordError === true) return 'passwords must match'
      return CONFIRM_PASSWORD_PLACEHOLDER
    },
    isEmailError() {
      return this.emailPlaceholder !== EMAIL_PLACEHOLDER
    },
    isPasswordError() {
      return this.passwordPlaceholder !== PASSWORD_PLACEHOLDER
    },
    isConfirmPasswordError() {
      return this.confirmPasswordError
    }
  }
}
</script>

<style>

</style>
