<template>
  <div>
    <h1 class="notFound">
      404 Page Not Found!! <router-link to="/"> Go To Home Page</router-link>
    </h1>
  </div>
</template>

<style scoped>
.notFound {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 70vh;
}
.notFound a {
  text-decoration: underline;
  color: var(--main-color);
  margin-top: 10px;
}
</style>
