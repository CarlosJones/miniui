<template lang="html">
  <section class="dashboard">
    <h1>This is dashboard!</h1>
    <router-link to="/crud">crud</router-link>
    <div id="add"></div>
  </section>
</template>

<script lang="js">
export default {
  name: 'dashboard',
  mounted:function () {
    //这个例子说明router不支持这种方式
    $('#add').html('<router-link to="/crud">add</router-link>')
  }
}
</script>

<style scoped lang="scss">
</style>
