<template>
  <main-section headline="Sign In">
    <table>
      <tr>
        <td>
          <feedback-input />
        </td>
      </tr>
      <tr>
        <td>
          <feedback-input type="password" />
        </td>
      </tr>
    </table>
  </main-section>
</template>

<script>
import MainSection from '@/pages/components/MainSection.vue'
import FeedbackInput from '@/pages/components/FeedbackInput.vue'

const EMAIL_PLACEHOLDER = 'Email'
const PASSWORD_PLACEHOLDER = 'Password'

export default {
  components: {
    MainSection
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  watch: {
    status() {
      if (this.status === true) this.$router.push('/profile')
    }
  },
  computed: {
    status() {
      return this.$store.getters.status
    }
  }
}
</script>

<style>

</style>
