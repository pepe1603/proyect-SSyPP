// Auth.js

import axios from 'axios';

const API_URL = 'http://localhost:3000';/*'https://reqres.in/api';*/

// Función para iniciar sesión
export async function handleLogin(email, password) {
  try {//cuando usamos una api que retorne lo quepedimos 
    const response = await axios.post(`${API_URL}/users`, { email, password });
    const userData = response.data;
    if (userData.role) {
      // Si hay un campo "role" en los datos del usuario, devolver los datos del usuario
      return userData;
    } else {
      throw new Error('No se pudo determinar el rol del usuario');
    }
  } catch (error) {
    throw new Error('Usuario o contraseña incorrectos');
  }
}

// Función para obtener los datos del usuario desde el almacenamiento local
export function getUserData() {
  const userDataString = localStorage.getItem('userData');
  if (userDataString) {
    return JSON.parse(userDataString);
  } else {
    return null;
  }
}

// Función para verificar si el usuario está autenticado (simulado)
export function isAuthenticated() {
  return !!localStorage.getItem('token');
}

// Función para cerrar sesión (simulado)
export function logout() {
  localStorage.removeItem('token');
}
