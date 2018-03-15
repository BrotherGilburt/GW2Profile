<template>
  <div class="profile_section">
    <h1 class="profile_section_header">{{headline}}</h1>
    <div class="profile_section_body">
      <div class="profile_section_content">
        <slot></slot>
      </div>
      <slot name="profile_section_buttons"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headline: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      editMode: false
    }
  }
}
</script>