<template>
  <div class="home">
    <h1
      class="text-center d-flex align-items-center justify-content-center"
      style="height: 90vh"
    >
      {{
        token
          ? "One day there will be something here 😜😜"
          : `Please Login To show Data 😄😄`
      }}
    </h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomeView",
  computed: {
    ...mapState(["token"]),
  },
};
</script>
