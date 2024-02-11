<template>
    <div class="p-card ">
        <h2>Tabla de alumnos</h2>
      <DataTable :value="alumnos" :paginator="true" rows="5" class="custom-table">
        <Column field="nombre_alumno" header="Nombre"></Column>
        <Column field="apellidos_alumno" header="Apellidos"></Column>
        <Column field="grado_grupo" header="Grado y  grupo"></Column>
        <Column field="licenciatura" header="Licenciatura"></Column>
        <Column field="empresa" header="Empresa"></Column>
        <Column field="practica" header="Practica"></Column>
        <Column field="servicio_social" header="ServicioSocial"></Column>
      </DataTable>
    </div>
  </template>
  
  <script >
  import { ConsultaGeneralService } from '@/services/ConsultaGeralService';
  import DataTable from 'primevue/datatable';
  import Column from 'primevue/column';
  export default{
    components:{
        DataTable,
        Column
    },
    data(){
        return{
            alumnos: null
        }
    },
    mounted(){
        ConsultaGeneralService.getAlumnos().then((data) => (this.alumnos = data));
    },
}
  </script>

  <style scoped>
  @import '../assets/css/style_DataTable.css';
  </style>
  