<template>
  <input :type="type" :class="classes" :value="value" @keyup="change($event.target.value)" @input="update($event.target.value)" :placeholder="placeholder">
</template>

<script>
export default {
  props: {
      type: {
        type: String,
        default: 'text',
        validator(value) {
          return value==='text' || value==='password' || value==='email'
        }
      },
      value: String,
      error: Boolean,
      placeholder: String
  },
  methods: {
    update(value) {
      this.$emit('input', value)
    },
    change(value) {
      if(value.length > 0) this.$emit('change')
    }
  },
  computed: {
    classes() {
      return {
        feedback_input: true,
        feedback_input_error: this.error
      }
    }
  }
}
</script>

<style>
.feedback_input {
  font-size: inherit;
  width: 100%;
  border: 1px solid black;
  padding: 2px;
}

.feedback_input_error::placeholder {
  color: red;
  opacity: 1;
}
</style>
