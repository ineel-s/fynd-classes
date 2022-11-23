<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand to="/">Workshops App</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <!-- We are building Single Page Application (SPA) -->
        <!-- if we use "to" instead of "href" internally Vue Bootstrap uses <router-link> instead of <a> -> This will avoid page refresh -->
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/workshops">List of workshops</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Logout</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
    name: 'AppMenu'
}
</script>

<style>

</style>