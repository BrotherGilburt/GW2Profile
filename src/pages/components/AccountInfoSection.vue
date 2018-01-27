<template>
  <profile-section headline="Account Info:">
    <div>
      <table>
        <tr>
          <td class="table_label">Account:</td>
          <td>{{name}}</td>
        </tr>
        <tr>
          <td class="table_label">Age:</td>
          <td>{{age}}</td>
        </tr>
        <tr>
          <td class="table_label">Achievement Points:</td>
          <td>{{ap}}</td>
        </tr>
        <tr>
          <td class="table_label">Fractal Level:</td>
          <td>{{fractal}}</td>
        </tr>
        <tr>
          <td class="table_label">WvW Rank:</td>
          <td>{{wvw}}</td>
        </tr>
      </table>
    </div>
  </profile-section>
</template>

<script>
import ProfileSection from '@/pages/components/ProfileSection.vue'

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

</style>
