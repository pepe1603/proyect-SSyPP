<template>
  <div>
    <input type="text" v-model="email" placeholder="Email">
    <input type="password" v-model="password" placeholder="Contraseña">
    <button @click="login">Iniciar sesión</button>
  </div>
</template>

<script>
import { handleLogin } from '../Auth/Auth'

export default {
  name: 'login',
  data() {
    return {
      email: 'admin@example.com',
      password: 'admin123'
    };
  },
  methods: {
    async login() {
      try {
        const userData = await handleLogin(this.email, this.password);
        // Guardar los datos del usuario en el almacenamiento local
        localStorage.setItem('userData', JSON.stringify(userData));
        // Redireccionar al panel correspondiente
        if (userData.role === 'admin') {
          this.$router.push('/cPanelAdmin');
        } else if (userData.role === 'student') {
          this.$router.push('/cPanelStudiante');
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error.message);
      }
    }
  }
}
</script>
