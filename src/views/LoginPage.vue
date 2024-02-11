<template>
<div class="c-login">
  <div class="centered">
    <div class="c-input" >
      <h1>Login</h1><br>

      <label for="email" class="c-label">Username</label>
      <InputText id="email" v-model="email" type="text" class="w-12rem" ></InputText>
    </div>
    <div class="c-input">
      <label for="password" class="w-6rem">Password</label>
      <InputText id="password" v-model="password" type="password" aria-placeholder="contraseña" class="w-12rem" ></InputText>
    </div>

    <Button @click="login" label="Login" severity="info" icon="pi pi-user" class="btn"> </Button>    
<br>
  </div>
</div>

</template>

<script>
import { handleLogin } from '../Auth/Auth'
import InputText from 'primevue/inputtext';

export default {
  components:{
    InputText
    
  },
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

<style scoped>
.c-label{
  padding: .2rem;
  font-size: 16px;

}
.c-login{
  height: 100vh;
  width: 100%;
  display: flex;
  text-align: center;
  padding-bottom: .5rem;
  padding-top: 5rem;
  justify-content: center;
  
}
.centered {

  width: 450px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;
  gap: 1.68rem;
  border-radius: .25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.c-input{
  display: flex;
  flex-direction: column;
  gap: .6rem;
}

.btn{
  border: none;
  width: 10rem;
  padding: 22px 32px;
  margin-bottom: 1rem;
}
</style>