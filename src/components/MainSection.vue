<template>
    <div class="main-section center-section">
        <h1 class="header">
            <slot name="header"/>
        </h1>

        <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-section {
  color: white;
  background: rgba(28,28,38,0.9);
  opacity: .9;
  margin: auto;
  padding: 15px;
  min-height: 750px;
  text-align: center;
}

.header {
  background: rgba(11,11,15,1);
  margin: auto;
  width: 100%;
}
</style>
