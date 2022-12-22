<template>
  <div id="app" v-if="fronteggLoaded">
    <div v-if="this.authState.user">
      <span>Logged in as: {{this.authState.user.name}}</span>
    </div>
    <div>
      <button v-if="this.authState.user" v-on:click="logout">Logout</button>
      <button v-if="this.authState.user" v-on:click="showAccessToken">What is my access token?</button>
      <button v-if="!this.authState.user" v-on:click="goToLogin">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    if (!this.authState.user) {
      this.goToLogin();
    }
  },
  methods: {
    goToLogin() {
      this.$router.push('/account/login');
    },
    showAccessToken() {
      alert(this.authState.user.accessToken);
    },
    logout() {
      this.$router.push('/account/logout');
    }
  },
  data() {
    return {
      ...this.mapAuthState(),
    }
  }
};
</script>
