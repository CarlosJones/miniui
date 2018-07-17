<template>
  <div id="app">
      <div class="container-scroller">
        <app-header/>
        <div class="container-fluid page-body-wrapper">
          <app-sidebar/>
          <div class="main-panel">
            <div class="content-wrapper">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import AppHeader from '../src/components/partials/AppHeader'
import AppSidebar from '../src/components/partials/AppSidebar'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppSidebar,
    // AppFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
