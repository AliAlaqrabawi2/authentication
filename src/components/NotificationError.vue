<template>
  <div class="Notification">
    <div
      class="container bg-danger text-white d-flex align-items-start justify-content-between p-2"
      :style="ModalPosition"
    >
      <p mt-3>{{ err }}</p>
      <p class="close" @click="closeModal">&times;</p>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      timeInterval: null,
    };
  },
  methods: {
    clearError() {
      this.timeInterval = setTimeout(() => {
        this.setErr(null);
      }, 1500);
    },
    closeModal() {
      clearTimeout(this.timeInterval);
      this.setErr(null);
    },

    ...mapMutations(["setErr"]),
  },
  computed: {
    ...mapState(["err"]),
    ModalPosition() {
      return { top: this.top, left: this.left };
    },
  },
  created() {
    this.clearError();
  },
  props: ["top", "left"],
};
</script>

<style scoped>
.Notification {
  max-width: 400px;
  width: 100%;
  margin: auto;
  text-align: center;
  position: relative;
}
.container {
  width: 100%;
  border-radius: 3px;
  width: 100%;
  position: absolute;
}
.close {
  cursor: pointer;
}
</style>
