<template>
  <div class="button_section_row">
    <button v-if="editMode===false & !itemAdded" class="section_button" @click="start()">add</button>
    <button v-if="editMode===true" class="section_button" @click="add()">add</button>
    <button v-if="editMode===true" class="section_button" @click="cancel()">cancel</button>
    <button v-if="editMode===false && itemAdded" class="section_button" @click="remove()">remove</button>
  </div>
</template>

<script>
export default {
  props: {
    editMode: {
      type: Boolean,
      required: false
    },
    itemAdded: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    start() {
      this.$emit('start')
    },
    add() {
      this.$emit('add')
    },
    cancel() {
      this.$emit('cancel')
    },
    remove() {
      this.$emit('remove')
    }
  }
}
</script>
