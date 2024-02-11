import axios from 'axios';

const API_URL = 'http://localhost:3000';

// Función para iniciar sesión
export async function handleLogin(email, password) {
  try {
    const response = await axios.get(`${API_URL}/users`);
    const users = response.data;
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      return user;
    } else {
      throw new Error('Usuario o contraseña incorrectos');
    }
  } catch (error) {
    throw new Error('Error al iniciar sesión: ocasionado por', error.message);
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

// Función para verificar si el usuario está autenticado
export function isAuthenticated() {
  const userDataString = localStorage.getItem('userData');
  return userDataString !== null;
}

// Función para cerrar sesión
export function logout() {
  localStorage.removeItem('userData');
}

