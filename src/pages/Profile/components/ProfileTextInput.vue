<template>
  <div class="profile_section_item">
    <label>{{label}}:</label>
    <span v-if="!edit">{{value}}</span>
    <input v-if="edit" class="profile_section_input" type="text" :value="value" @input="update($event.target.value)" :maxLength="max"/>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    display: String,
    value: String,
    edit: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: 524288
    }
  },
  methods: {
    update(value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style>
label {
  margin-right: 10px;
  font-weight: 600;
}

.profile_section_item {
  display: flex;
  align-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 10px;
}

.profile_section_input {
  box-sizing: content-box;
  flex: 1;
  padding: 0 10px;
  border-radius: 5px;
  font-size: inherit;
  font-family: inherit;
  background: inherit;
  color: inherit;
  border: none;
  background-color:rgb(41, 41, 54);
  /*margin-top: -2px;
  border-bottom: 2px solid white;*/
}
</style>
