<template>
  <div class="section">
      <table>
          <tr>
              <td class="label">Name:</td>
              <td>{{name}}</td>
          </tr>
          <tr>
              <td class="label">Age:</td>
              <td>{{age}}</td>
          </tr>
          <tr>
              <td class="label">Achievement Points:</td>
              <td>{{ap}}</td>
          </tr>
          <tr>
              <td class="label">Fractal Level:</td>
              <td>{{fractal}}</td>
          </tr>
          <tr>
              <td class="label">Wvw Rank:</td>
              <td>{{wvw}}</td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
  data() {
      return {}
  },
  methods: {
      loadContent() {
        if (this.isKey == true) {
            this.$store.dispatch('loadAccountInfo')
        } else if (this.isKey == false && this.$store.getters.status == true) {
            this.$store.dispatch('deleteAccountInfo')
        }
      }
  },
  mounted() {
      
  },
  watch: {
      isKey: function() {
          this.loadContent()
      }
  },
  computed: {
      isKey() {
          let apikey = this.$store.getters.apikey.value
          return apikey != null && apikey != undefined
      },
      name() {
          return this.$store.getters.account.name
      },
      age() {
          let age = this.$store.getters.account.age
          if (age != null && age != undefined)
            return Math.floor(age/60/60) + ' hours'
          else
            return null
      },
      ap() {
          return this.$store.getters.account.ap
      },
      fractal() {
          return this.$store.getters.account.fractal
      },
      wvw() {
          return this.$store.getters.account.wvw
      }
  }
}
</script>

<style scoped>
.section {
  padding: 10px;
  background: rgba(11, 11, 15, 1);
}

.label {
  padding-right: 5px;
  text-align: right;
  font-weight: bold;
}
</style>
