<template>
  <div class="layout-cpanel">
    <div class="topbar">
      <!-- Contenido de la topbar aquí -->
      <button class="hide-sidebar-btn" @click="toggleSidebar">Ocultar Sidebar</button>
      <c-topbar></c-topbar>
    </div>
    <div class="container">
      <div class="sidebar" v-if="isSidebarVisible">
        <!-- Contenido del sidebar aquí -->
        <c-sidebar></c-sidebar>
        
      </div>
      <main class="main-content">
        <!-- Contenido principal aquí -->
        <slot></slot>

        <app-footer></app-footer>
      </main>
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
@import '@/assets/layout_scss/_layout_cPanel.scss'

</style>
