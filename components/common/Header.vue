<template>
  <header>
    <b-navbar toggleable="md" type="dark" variant="dark">
      <!--<b-container>-->

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">
        <nuxt-link to="/" class="nav-link-brand">Movify</nuxt-link>
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <li class="nav-item">
            <nuxt-link to="/search" class="nav-link">Search</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/login" class="nav-link">Login</nuxt-link>
          </li>
        </b-navbar-nav>
      </b-collapse>
      <!--</b-container>-->
    </b-navbar>
  </header>
</template>

<script>
  export default {};
</script>

<style scoped>
  .nav-link-brand {
    color: white;
    font-weight: bold;
  }

  /*.navbar-dark */
  .nav-item a {

    color: white;

  }
</style>
