<template>
  <div>
    <notification-error top="100px" left="0" v-if="err" />
    <div
      style="height: 80vh"
      class="container d-flex align-items-center justify-content-center w-100"
    >
      <form style="width: 480px" @submit.prevent="handleLogin">
        <h2 class="text-center">Login</h2>

        <input
          type="email"
          class="form-control w-100 mt-4"
          placeholder="email"
          v-model="email"
          autocomplete="on"
        />
        <br />
        <input
          type="password"
          class="form-control"
          placeholder="password"
          v-model="password"
          autocomplete="off"
        />
        <br />
        <button class="btn btn-primary w-100">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NotificationError from "../components/NotificationError.vue";
export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
  components: {
    NotificationError,
  },
  methods: {
    handleLogin() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
  computed: {
    ...mapState(["token", "err"]),
  },
};
</script>
