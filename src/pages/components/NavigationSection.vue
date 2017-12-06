<template>
  <div class="nav_panel">
      <router-link class="router_link" to="/">Home</router-link>
      <span> | </span>
      <router-link class="router_link" to="/profile">Profile</router-link>
      <span> | </span>
      <router-link class="router_link" to="/about">About</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav_panel {
  border-bottom: 2px solid black;
  background: #0b0b0f;
  color: white;
  font-size: 24px;
  text-align: center;
  padding: 5px;
}
</style>
