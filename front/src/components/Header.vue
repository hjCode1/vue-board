<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#" :to="{name:'Home'}">NavBar</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-item href="#" :to="{name:'Home'}">Home</b-nav-item>
      <b-nav-item href="#" :to="{name:'Board'}">Free Board</b-nav-item>
      <b-nav-item-dropdown right>
        <template v-slot:button-content>
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style>
</style>