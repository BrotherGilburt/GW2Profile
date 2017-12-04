<template>
  <profile-section headline="Account Info:">
    <div>
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
  </profile-section>
</template>

<script>
import ProfileSection from './ProfileSection.vue'

export default {
  props: {
    name: String,
    age: String,
    ap: String,
    fractal: String,
    wvw: String
    },
  components: {
      ProfileSection
    }
}
</script>

<style scoped>
.label {
  padding-right: 5px;
  text-align: right;
  font-weight: bold;
}
</style>
