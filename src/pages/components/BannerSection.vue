<template>
  <div class="banner">
    <div class="page_width banner_flex">
      <div class="banner_left">
        <router-link to="/"><span class="banner_title">GW2 Profile</span></router-link>
      </div>
      <div class="banner_right" v-if="!status">
        <button class="blue_button" type="button" @click="goToSignIn()">sign in</button>
        <button class="blue_button" type="button" @click="goToSignUp()">sign up</button>
      </div>
      <div class="banner_right" v-if="status">
        <span class="login_message">{{displayEmail}} </span>
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
  width: 100%;
}

.banner_flex {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;
}

.banner_left, .banner_right {
  background: #0b0b0f;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner_left {
  padding: 5px 15px 0 15px;
  white-space: nowrap;
}

.banner_right * {
  margin: 0 5px;
}

.banner_right {
  padding: 10px;
}

@media all and (max-width: 750px) {
  .banner_flex {
    flex-wrap: wrap;
  }

  .banner_left {
    align-self: flex-start;
    width: 100%;
  }

  .banner_right {
    align-self: flex-end;
    width: 100%;
  }
}

.banner_title {
  font-size: 50px;
  font-weight: bold;
}

.login_message {
  font-weight: 580;
  color: white;
}
</style>
