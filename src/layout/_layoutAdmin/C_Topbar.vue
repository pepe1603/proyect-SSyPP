<template>

<h1>Topbar</h1>
  </template>
  
  <script>
 
  export default {

    name: 'C_Topbar',
    methods: {
      toggleSidebar() {
        // Método para alternar la visibilidad del sidebar
        this.$emit('toggle-sidebar');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para tu componente Topbar */
  </style>
  