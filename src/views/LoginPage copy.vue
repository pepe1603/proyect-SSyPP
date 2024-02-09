<template>
  <div>
    <input type="text" v-model="email" placeholder="Email">
    <input type="password" v-model="password" placeholder="Contraseña">
    <button @click="login()">Iniciar sesión</button>
  </div>
</template>

<script>
import { handleLogin } from '../Auth/Auth'

export default {
    name: 'login',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {

    async login() {
      try {
        const userData = await handleLogin(this.email, this.password);
          // Redireccionar al panel correspondiente
          if (userData.role === 'admin') {
            // Redireccionar al panel de administrador
            this.$router.push('/cPanelAdmin');
          } else if (userData.role === 'student') {
            // Redireccionar al panel de estudiante
            this.$router.push('/cPanelStudiante');
          } else {
            console.error('Rol no reconocido:', userData.role);
            // En caso de que no haya un campo de "rol" en el JSON o no coincida con lo esperado
            console.error('No se pudo determinar el rol del usuario. Redirigiendo a una página predeterminada...');
            // Redireccionar a una página predeterminada o manejar de otra manera el caso
            //reigirnos a welcome
            // Mostrar un mensaje de error específico si el rol no es reconocido
             throw new Error('Rol no reconocido: ' + userData.role);
          }
      } catch (error) {
        console.error('Error al iniciar sesión:', error.message);
      }
    }
  }
}
</script>
