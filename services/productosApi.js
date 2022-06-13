const API_HOST = "http://192.168.0.8:3000";
//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjllYWQwZmZiOTc2MjYzNWQwYWVmZDkiLCJpYXQiOjE2NTQ1NjY0NjAsImV4cCI6MTY1NDU3MzY2MH0.1SRjpR0hBpl0nw4xcywwHOMrqTEj1I9mrEqMv8aKCSU";
//EL TOKEN VENCE!!!!!!

export async function getProductos() {
  try {
    const url = `${API_HOST}/api/productos`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Solicitud fallida", error);
  }
}

/* export async function getPokemonDetails(id) {
  try {
    const url = `${API_HOST}/pokemon/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
} */