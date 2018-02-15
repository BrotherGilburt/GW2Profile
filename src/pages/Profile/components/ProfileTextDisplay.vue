<template>
  <div class="profile_section_item">
    <label class="profile_section_item_label" v-if="label != null">{{label}}:</label>
    <span>{{value}}</span>
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
    }
  }
}
</script>

<style src="@/styles/profile.css"></style>
