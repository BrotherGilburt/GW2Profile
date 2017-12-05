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
                       v-on:keyup="checkPlaceholderReset('email')"
                       type="text" v-bind:placeholder="emailHolder"/>
              </td>
              <td>
                <input v-bind:class="passInputClass"
                       v-model="password"
                       v-on:keyup="checkPlaceholderReset('pass')"
                       type="password" v-bind:placeholder="passHolder"/>
              </td>
              <td>
                <button type="submit">sign in</button>
              </td>
              <td>
                <button type="button" v-on:click="signUp">sign up</button>
              </td>
            </tr>
          </table>
        </form>
      </div>
      <div class="bannerRight" v-if="status">
        <span class="loginMessage">{{displayEmail}} </span>
        <button type="button" v-on:click="signOut">sign out</button>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase";

export default {
  data() {
    return {
      email: '',
      password: '',
      emailHolder: 'Email',
      passHolder: "Password",
      emailError: false,
      passError: false
    };
  },
  methods: {
    signIn() {
      var promise = firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password);
      promise.catch(error => {
        var errorCode = error.code;
        if (errorCode == "auth/invalid-email") {
          this.emailFieldMessage("invalid email");
        } else if (errorCode == "auth/user-not-found") {
          this.emailFieldMessage("user not found", "both");
        } else if (errorCode == "auth/wrong-password") {
          this.passFieldMessage("wrong password");
        } else {
          console.log(error.message);
        }
      });
    },
    signUp() {
      var promise = firebase.auth().createUserWithEmailAndPassword(
        this.email,
        this.password
      );
      promise.catch(error => {
        var errorCode = error.code;
        if (errorCode == "auth/email-already-in-use") {
          this.emailFieldMessage("email unavailable");
        } else if (errorCode == "auth/invalid-email") {
          this.emailFieldMessage("invalid email");
        } else if (errorCode == "auth/weak-password") {
          this.passFieldMessage("too short");
        } else {
          console.log(error.message);
        }
      });
    },
    signOut() {
      firebase.auth().signOut();
      this.email = "";
      this.password = "";
    },
    checkPlaceholderReset(type) {
      if (type == "email" && this.email.length > 0) this.placeholderReset();
      if (type == "pass" && this.password.length > 0) this.placeholderReset();
    },
    placeholderReset() {
      this.emailHolder = "Email";
      this.passHolder = "Password";
      this.emailError = false;
      this.passError = false;
    },
    emailFieldMessage(mesg, type) {
      this.placeholderReset();
      this.emailError = true;
      this.email = "";
      if (type == "both") this.password = "";
      this.emailHolder = mesg;
    },
    passFieldMessage(mesg) {
      this.placeholderReset();
      this.passError = true;
      this.password = "";
      this.passHolder = mesg;
    }
  },
  computed: {
    status() {
      return this.$store.getters.status
    },
    displayEmail() {
      if (this.status) {
        return firebase.auth().currentUser.email;
      } else {
        return "";
      }
    },
    emailInputClass() {
      return {
        loginTextInput: true,
        loginTextError: this.emailError
      };
    },
    passInputClass() {
      return {
        loginTextInput: true,
        loginTextError: this.passError
      };
    }
  }
};
</script>

<style scoped>
.banner {
  color: white;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/testproject-c8451.appspot.com/o/guild_wars_2_background.jpg?alt=media&token=5bdc7f3f-7948-4026-97db-8c7649da5508");
  background-attachment: fixed;
  background-position: 50% 75%;
  background-repeat: repeat;
  background-color: #273746;
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
  margin-bottom: 5px;
  align-self: flex-end;
  float: right !important;
}

.bannerTitle {
  font-size: 36px;
  font-weight: bold;
}

.loginMessage {
  color: #0b0b0f;
}
</style>
