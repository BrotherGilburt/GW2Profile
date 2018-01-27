<template>
  <div class="profile_section">
    <h1 class="profile_section_header">{{headline}}</h1>
    <div class="profile_section_body">
      <template v-if="enableEdit===true">
        <button v-if="editMode===false" class="section_button" @click="edit()">edit</button>
         <button v-if="editMode===true" class="section_button" @click="done()">done</button>
      </template>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headline: String,
    enableEdit: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      editMode: false
    }
  },
  methods: {
    edit() {
      this.editMode = true
      this.$emit('edit', true)
    },
    done() {
      this.editMode = false
      this.$emit('edit', false)
    }
  }
}
</script>

<style scoped>
.profile_section {
  box-sizing: border-box;
  margin: 10px 0 0 0;
  text-align: left;
}

.profile_section_body {
  box-sizing: border-box;
  position: relative;
  padding: 10px;
  background: rgba(11, 11, 15, 1);
}

.profile_section_header {
  font-size: 26px;
  display: inline-block;
  background: rgb(53, 86, 137);
  margin: 0;
  padding: 5px 10px;
 }
</style>
