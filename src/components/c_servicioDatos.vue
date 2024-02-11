<template>
    <div class="service-dates-panel">
      <h2>Fechas de Servicio Social</h2>
      <div class="card-container">
        <div v-for="(service, index) in serviceDates" :key="index" class="card">
          <h3>{{ service.title }}</h3>
          <p>{{ service.date }}</p>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";

  const serviceDates = ref([
    {
      title: "Actividad 1",
      date: "05/04/2024",
      description: "Descripción de la actividad 1 de servicio social."
    },
    {
      title: "Actividad 2",
      date: "20/04/2024",
      description: "Descripción de la actividad 2 de servicio social."
    },
    {
      title: "Actividad 3",
      date: "10/05/2024",
      description: "Descripción de la actividad 3 de servicio social."
    }
  ]);
  </script>
  
  <style scoped>
  .service-dates-panel {
    margin: 20px;
  }
  
  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
  }
  
  .card {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .card h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  
  .card p {
    font-size: 1rem;
    margin-bottom: 10px;
  }
  </style>
  