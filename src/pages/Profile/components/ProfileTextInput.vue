<template>
  <div class="profile_section_item">
    <label class="profile_section_item_label" v-if="label != null">{{label}}:</label>
    <span v-if="!edit">{{displayValue}}</span>
    <input v-if="edit" class="profile_section_item_input" type="text" :value="value" @input="update($event.target.value)" :maxLength="max"/>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: null
    },
    value: {
      type: String,
      required: true
    },
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
  },
  computed: {
    displayValue() {
      return this.value || 'none'
    }
  }
}
</script>

<style src="@/styles/profile.css"></style>
