<template>
  <div class="home">
    <nav class="navbar navbar-light bg-light p-3 mb-2">
      <a class="navbar-brand mb-0 h1">Auth Assaiment</a>

      <div>
        <div>
          {{ token && "Welcome User" }}
          <router-link class="btn btn-primary" v-if="!token" to="/login"
            >Login</router-link
          >

          <button
            @click="handleLogout"
            class="btn btn-danger btn-sm"
            v-if="token"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["token"]),
  },
  methods: {
    ...mapMutations(["logout"]),
    handleLogout() {
      this.logout();
      !this.token && this.$router.push("/login");
    },
  },
};
</script>
