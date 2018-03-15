<template>
  <div class="button_section_vertical">
    <button v-if="editMode===false" class="section_button" @click="edit()">edit</button>
    <button v-if="editMode===true" class="section_button" @click="done()">done</button>
    <button v-if="editMode===true" class="section_button" @click="cancel()">cancel</button>
  </div>
</template>

<script>
export default {
  props: {
    editMode: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    edit() {
      this.$emit('edit')
    },
    done() {
      this.$emit('done')
    },
    cancel() {
      this.$emit('cancel')
    }
  }
}
</script>
