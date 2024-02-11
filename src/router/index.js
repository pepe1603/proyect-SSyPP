import { createRouter, createWebHistory } from 'vue-router';
import WelcomePage from '@/views/WelcomePage.vue';
import LoginPage from '../views/LoginPage.vue';
import StudiantePanel from '../views/_studiantePanel/StudiantePanel.vue';
import AdminPanel from '../views/_adminPanel/AdminPanel.vue';
import { isAuthenticated, getUserData } from '@/Auth/Auth';

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
      component: LoginPage
    },
    {
      path: '/cPanelAdmin',
      component: AdminPanel,
      meta: {
        requiresAuth: true, isAdmin: true
      },
      children: [
        {
          path: '/Home',
          name: 'Home',
          component: () => import('@/views/Home.vue')
        },
        {
          path: '/Formulario',
          name: 'Formulario',
          component:  () => import('@/views/_adminPanel/Frmulario.vue')
        },
        {
          path: '/Consultas',
          name: 'Consultas',
          component: () => import('@/views/_adminPanel/Consulta.vue')
        },
        {
          path: '/Empresas',
          name: 'Empresas',
          component: () => import('@/views/_adminPanel/Empresas.vue')
        },
        {
          path: '/Documentacion',
          name: 'Documentacion',
          component: () => import('@/views/_adminPanel/Documentacion.vue')
        },{
          path: '/Exportar',
          name: 'Exportar',
          component: () => import('@/views/_adminPanel/Exportar.vue')
        }
      ]
    },
    {
      path: '/cPanelStudiante',
      component: StudiantePanel,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          component: StudiantePanel
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (isAuthenticated()) {
      const userData = getUserData();
      if (userData) {
        if (userData.role === 'admin' && to.meta.isAdmin) {
          next();
        } else if (userData.role === 'student' && !to.meta.isAdmin) {
          next();
        } else {
          console.error('Usuario no autorizado:', userData);
          next('/login');
        }
      } else {
        console.error('Datos de usuario no encontrados');
        next('/login');
      }
    } else {
      next('/login');
    }
  } else {
    next();
  }
});

export default router;



