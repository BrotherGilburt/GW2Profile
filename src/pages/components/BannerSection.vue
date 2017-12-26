<template>
  <div class="banner">
    <div class="center_section banner-flex">
      <div class="bannerLeft">
        <router-link to="/"><span class="bannerTitle">GW2 Profile</span></router-link>
      </div>
      <div class="bannerRight" v-if="!status">
        <table>
          <tr>
            <td>
              <button class="blue_button" type="button" @click="goToSignIn()">sign in</button>
            </td>
            <td>
              <button class="blue_button" type="button" @click="goToSignUp()">sign up</button>
            </td>
          </tr>
        </table>
      </div>
      <div class="bannerRight" v-if="status">
        <span class="loginMessage">{{displayEmail}} </span>
        <button class="blue_button" type="button" @click="signOut()">sign out</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    goToSignIn() {
      this.$router.push('/signin')
    },
    goToSignUp() {
      this.$router.push('/signup')
    },
    signOut() {
      this.$store.dispatch('signOut')
    }
  },
  computed: {
    status() {
      return this.$store.getters.status
    },
    displayEmail() {
      return this.$store.getters.email
    }
  }
}
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
