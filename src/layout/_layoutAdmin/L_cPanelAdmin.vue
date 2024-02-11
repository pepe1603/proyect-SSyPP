<template>
  <div class="layout-cpanel-wrapper">
    
      

        <aside class="sidebar" v-if="isSidebarVisible">
          <!-- Contenido del sidebar aquí -->
          <c-sidebar></c-sidebar>
          
        </aside>
        <div class="container-main">
          <c-topbar></c-topbar>

          <main class="main-content">
                    <!-- Contenido principal aquí -->
                    
                    <slot></slot>

             
          </main>
          
          <app-footer></app-footer>
        </div>
       
      
  </div>
</template>

<script>
import AppFooter from '../AppFooter.vue';
import C_Sidebar from './C_Sidebar.vue';
import C_Topbar from './C_Topbar.vue';
export default {
  components: { C_Topbar, C_Sidebar, AppFooter },
  name: 'Layout_cPanel',
  data() {
    return {
      isSidebarVisible: true
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    }
  }
};
</script>
<style lang="scss">
//no descomeentar 
@import '@/assets/layout_scss/_layout_cPanel.scss'

</style>
