<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" :to="{ name: 'index' }">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </nuxt-link>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable" v-if="loggedIn">
          <a class="navbar-link">
            {{ user.name }}
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item" @click.prevent="logout">
              Logout
            </a>
          </div>
        </div>
        <div class="navbar-item" v-if="!loggedIn">
          <div class="buttons">
            <nuxt-link :to="{ name: 'auth-signup' }" class="button is-primary">
              <strong>Sign up</strong>
            </nuxt-link>
            <nuxt-link :to="{ name: 'auth-signin' }" class="button is-light">
              Sign in
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout();
    }
  }
};
</script>

<style scoped></style>
