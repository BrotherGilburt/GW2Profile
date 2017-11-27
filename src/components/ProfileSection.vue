<template>
  <div class="section">
    <h1 class="header">
      <slot name="header"/>
    </h1>
  
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.section {
  text-align: left;
}

.header {
  font-size: 26px;
  display: inline-block;
  background: rgb(53, 86, 137);
  margin: 10px 0 0 0;
  padding: 5px 10px;
 }
</style>
