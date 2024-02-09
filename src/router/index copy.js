import { createRouter, createWebHistory } from 'vue-router'

import WelcomePage from '@/views/WelcomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import StudiantePanel from '../views/_studiantePanel/StudiantePanel.vue'
import AdminPanel from '../views/_adminPanel/AdminPanel.vue'
//importamos la Autentificacion del usuario/admin
import { isAuthenticated, getUserData } from '@/Auth/Auth'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'WelcomePage',
      component: WelcomePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage // Agrega una ruta para el componente de inicio de sesión
    },
    {
      //rutas para el cPanel Admininstrador
      path: '/cPanelAdmin',
      component: AdminPanel,
      meta: {
        requiresAuth: true, isAdmin: true//nos aseguramos que el user sea admin
      }
    },
    {
      //Ruta para el cPanel  Estudiante
      path: '/cPanelStudiante',
      //name: 'cPanelStudiante',
      component: StudiantePanel,
      meta: { requiresAuth: true}//solo verificamos que este loeado

    }
   
  ]
})

//Modificamos el Router para poder redirigir al usr al Cpanel Correspondiente
router.beforeEach((to, from, next) => {
  // Verificar si la ruta requiere autenticación
  if (to.meta.requiresAuth) {
    // Verificar si el usuario está autenticado
    if (isAuthenticated()) {
      //si es asi , pues se continua con la navegación
      const userData = getUserData(); // Suponiendo que esta función obtiene los datos del usuario desde localStorage
      if (userData && userData.role === 'admin' && to.meta.isAdmin) {
        next();
      } else if (userData && userData.role === 'student' && !to.meta.isAdmin) {
        next();
      }
      else {
        console.error('Usuario no autorizado:', userData);
        next('/login');
      }
    } else {
      // Redireccionar al inicio de sesión si el usuario no está autenticado, ajaja
      next('/login');
    }
  } else {
    // Continuar con la navegación para rutas que no requieren autenticación
    //por ejemplo Acerca de, o Blogs, etc..router.
    next();
  }
});

export default router


