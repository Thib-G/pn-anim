<template>
  <b-navbar toggleable="lg" type="dark" class="infrabel-bg-blue">
    <b-navbar-brand href="#">PN animation</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/" active-class="active" exact>Home</b-nav-item>
        <b-nav-item to="/chart" active-class="active" exact>Chart</b-nav-item>
        <b-nav-item to="/about" active-class="active" exact>About</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
