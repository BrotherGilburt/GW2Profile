<template>
<div class="gw2-profile-input-container">
  <input class="gw2profile-input" :type="type" :placeholder="placeholder" :value="value" @input="update($event.target.value)" :maxLength="max"/>
  <span v-if="errorMessage" class="gw2profile-input-message">{{errorMessage}}</span>
</div>
</template>

<script>
export default {
  props: {
    errorMessage: {
      type: String,
      default: ''
    },
    max: {
      type: Number,
      default: 524288
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text',
      validator: function(value) {
        return value === 'text' || value === 'password'
      }
    },
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    update(value) {
      this.$emit('input', value)
    }
  },
  computed: {
    isError() {
      return this.errorMessage !== '';
    }
  }
}
</script>

<style>

</style>
