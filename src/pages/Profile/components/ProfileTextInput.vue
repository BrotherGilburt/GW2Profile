<template>
  <div class="profile_section_item">
    <label class="profile_section_item_label" v-if="label != ''">{{label}}:</label>
    <span v-if="!edit" :class="{truncate: truncated}">{{displayValue}}</span>
    <input v-else :class="classes" type="text" :placeholder="errorMessage" :value="value" @input="update($event.target.value)" :maxLength="max"/>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      required: true
    },
    edit: {
      type: Boolean,
      required: true
    },
    max: {
      type: Number,
      default: 524288
    },
    errorMessage: {
      type: String,
      default: ''
    },
    truncated: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    update(value) {
      this.$emit('input', value)
    }
  },
  computed: {
    classes() {
      return {
        profile_section_item_input: true,
        profile_section_item_input_error: this.errorMessage !== ''
      }
    },
    displayValue() {
      return this.value || 'N/A'
    }
  }
}
</script>

<style src="@/styles/profile.css"></style>
