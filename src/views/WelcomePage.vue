<template>
  <div class="welcome-page">
    <h1>Bienvenido a nuestra aplicación</h1>
    <p>Por favor, inicia sesión para continuar.</p>
    <router-link to="/login">
      <button>Iniciar sesión</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'WelcomePage'
}
</script>

<style scoped>
/* Estilos opcionales para la página de bienvenida */
.welcome-page {
  text-align: center;
  margin-top: 100px;
}
</style>
