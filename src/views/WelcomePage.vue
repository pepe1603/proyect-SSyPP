<template>
  <div class="welcome-page card">
    <h1>Bienvenido a nuestra aplicación</h1><br> <br><br>
    <p style="margin-bottom: .5rem ;">Por favor, inicia sesión para continuar.</p>
   
    <router-link to="/login">
      <Button severity="info" label="iniciar sesion"></Button>
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
