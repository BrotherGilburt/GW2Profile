<template>
    <div class="main-section center-section">
        <h1 class="page_header">{{headline}}</h1>
        <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    headline: String
  }
};
</script>

<style scoped>
.main-section {
  color: white;
  background: rgba(28,28,38,0.9);
  margin: auto;
  padding: 15px;
  min-height: 750px;
  text-align: center;
}

.page_header {
  box-sizing: border-box;
  background: rgba(11,11,15);
  margin: 0 auto 25px auto;
  padding: 5px 10px;
  width: 100%;
}
</style>
