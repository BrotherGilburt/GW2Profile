<template>
  <div class="profile_section">
    <h1 class="profile_section_header">{{headline}}</h1>
    <div class="profile_section_body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headline: String
  }
}
</script>

<style scoped>
.profile_section {
  text-align: left;
}

.profile_section_body {
  padding: 10px;
  background: rgba(11, 11, 15, 1);
}

.profile_section_header {
  font-size: 26px;
  display: inline-block;
  background: rgb(53, 86, 137);
  margin: 10px 0 0 0;
  padding: 5px 10px;
 }
</style>
