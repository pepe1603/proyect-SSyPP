<template>
    <div class="practice-dates-panel">
      <h2>Fechas de Prácticas Universitarias</h2>
      <div class="card-container">
        <div v-for="(practice, index) in practiceDates" :key="index" class="card">
          <h3>{{ practice.title }}</h3>
          <p>{{ practice.date }}</p>
          <p>{{ practice.description }}</p>
        </div>
      </div>
    </div>
  </template> 
  
  <script setup>
  import {ref} from 'vue'
  const practiceDates = ref([
    {
      title: "Práctica 1",
      date: "01/03/2024",
      description: "Descripción de la práctica 1."
    },
    {
      title: "Práctica 2",
      date: "15/03/2024",
      description: "Descripción de la práctica 2."
    },
    {
      title: "Práctica 3",
      date: "30/03/2024",
      description: "Descripción de la práctica 3."
    }
  ]);
  </script>
  
  <style scoped>
  .practice-dates-panel {
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
  