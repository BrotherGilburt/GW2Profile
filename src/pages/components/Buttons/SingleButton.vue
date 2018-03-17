<template>
  <div class="button_section_vertical">
    <button class="section_button" @click="click()">{{label}}</button>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>
