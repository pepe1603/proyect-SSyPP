<template>
    <Panel class="card" header="Formulario pra Carta de Presentacion">

      <!--- Campos de  Empresa-->
            
      <div class="card custom-flex">
        <div class="form-group">
            <div class="card flex justify-content-center">
                <FloatLabel>
                        <label class="custom-label" for="empresa">Empresa o Institución:</label>
                        <InputText id="empresa" v-model="empresa"/>
                </FloatLabel>
            </div>
            <br>
            <div class="card flex justify-content-center">
                <FloatLabel>
                    <label class="custom-label" for="direccion">Dirección:</label>
                    <InputText id="direccion" v-model="direccion" />      
                </FloatLabel>
            </div>
            <br>
            
            <div class="card flex justify-content-center">
                <FloatLabel>
                    <label class="custom-label" for="nombreResponsable">Nombre del responsable</label>
                    <InputText id="nombreResponsable" v-model="nombreResponsable" />   
                </FloatLabel>
            </div>
                <br>
            <div class="card flex justify-content-center">
                <FloatLabel>
                    <label class="custom-label" for="apellidosResponsable">Apellidos del responsable :</label>
                    <InputText id="apellidosResponsable" v-model="apellidosResponsable" />
                </FloatLabel>
            </div>
            <br>
            <div class="d-field">
                        <label class="custom-label" style="margin-right: 1rem;" for="sexo">Sexo:</label>
                        <Dropdown  id="sexo" v-model="sexo" :options="['Masculino', 'Femenino']" placeholder="Seleccione" />
            </div>
            
        </div>
        
        <div class="custom-flex">
            <div class="divider-vl" >
                <Divider layout="vertical" />
            </div>
            
            <div class="divider-hl" >
                <Divider layout="horizontal" />
            </div>
            
        </div>
        

        <div class="form-group">
                    <!---- Campos de s Estudioanter-->
            <div class="card flex justify-content-center">
                <FloatLabel>
                        <label class="custom-label" for="nombreEstudiante">Nombre del estudiante:</label>
                        <InputText id="nombreEstudiante" v-model="nombreEstudiante" />
                </FloatLabel>
            </div>
            <br>
            <div class="card flex justify-content-center">
                <FloatLabel>
                    <label class="custom-label" for="apellidosEstudiante">Apellidos:</label>
                    <InputText id="apellidosEstudiante" v-model="apellidosEstudiante" />  
                </FloatLabel>
            </div>
            <br>
            <div class="card flex justify-content-center ">
                <FloatLabel>
                        <label class="custom-label" for="gradoGrupo">Grado y grupo:</label>
                        <InputText id="gradoGrupo" v-model="gradoGrupo" />
                </FloatLabel>
            </div>
            <br>
            <div class="d-field">
                    <label class="custom-label" style="margin-right:1rem;" for="licenciatura">Licenciatura:</label>
                <Dropdown  v-model="licenciatura" :options="tipoLicenciaturaOptions" optionLabel="label" optionValue="value" id="tipo-licenciatura" placeholder="Seleccione" />
            </div>
            <br>

            <div class="d-field">
                    <label class="custom-label"  style="margin-right:1rem;">Tipo de programa:</label>
                    <Dropdown v-model="tipoPrograma" :options="tipoProgramaOptions" optionLabel="label" optionValue="value" id="tipo-programa" placeholder="Seleccione" />
            </div>
        </div>
    </div>



<br>
      <Button label="Enviar" @click="enviarFormulario" >
      </Button>
    </Panel>
  </template>
  
  <script>
  import { ref } from 'vue';
  import InputText from 'primevue/inputtext';
  import Dropdown from 'primevue/dropdown';
  import Checkbox from 'primevue/checkbox';
  import Button from 'primevue/button';
  import FloatLabel from 'primevue/floatlabel';
  import Divider from 'primevue/divider';



  
  
  export default {
    
    components: {

        Divider,
        FloatLabel,
      InputText,
      Dropdown,
      Checkbox,
      Button
    },
    setup() {
      const empresa = ref('');
      const direccion = ref('');
      const nombreResponsable = ref('');
      const apellidosResponsable = ref('');
      const sexo = ref('');
      const nombreEstudiante = ref('');
      const apellidosEstudiante = ref('');
      const gradoGrupo = ref('');
    const tipoLicenciaturaOptions = [
        {label: 'Ingeniería en Software', value: 'ingenieria-en-software'},
        {label: 'Contaduria publica', value: 'contaduria-publica'}
    ]
      
      const tipoProgramaOptions = [
        {label: 'Practicas', value: 'practica'},
        {label: 'Servicio Social', value: 'servicio-social'}
      ];

      //var para almacenar la opcion del usuario
      const tipoPrograma = ref(null);
      const licenciatura = ref(null);
      const enviarFormulario = () => {
        // Aquí puedes enviar los datos del formulario a través de una petición HTTP
        // o realizar cualquier otra acción que necesites
        console.log({
          empresa: empresa.value,
          direccion: direccion.value,
          nombreResponsable: nombreResponsable.value,
          apellidosResponsable: apellidosResponsable.value,
          sexo: sexo.value,
          nombreEstudiante: nombreEstudiante.value,
          apellidosEstudiante: apellidosEstudiante.value,
          gradoGrupo: gradoGrupo.value,
          licenciatura: licenciatura.value,
          tipoPrograma: tipoPrograma.value
        });
      };
      
      return {
        //retornamos los valores ingresados 
        empresa,
        direccion,
        nombreResponsable,
        apellidosResponsable,
        sexo,
        nombreEstudiante,
        apellidosEstudiante,
        gradoGrupo,
        licenciatura,
        tipoLicenciaturaOptions,
        tipoProgramaOptions,
        tipoPrograma,
        enviarFormulario
      };
    }
  };
  </script>
  
  <style scoped>
  .form-group {
    margin-bottom: 1rem;
    
  }
  </style>
  