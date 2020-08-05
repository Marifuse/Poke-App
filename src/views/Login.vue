<template>
  <div class="login__container">
    <login-form/>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
export default {
  components: {
    LoginForm
  }
}
</script>

<style>
.login__container {
  margin: 0;
  background-image: url(https://firebasestorage.googleapis.com/v0/b/pokemon-c05f4.appspot.com/o/fondo-2.png?alt=media&token=94ce2f21-fa4d-4185-8be1-6809864a9071) !important;
  background-size: cover !important;
  height: 100%;
}
</style>