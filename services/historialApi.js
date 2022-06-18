const API_HOST = "https://tp2-proyecto-final.herokuapp.com";

export default async function getHistorial(userId) {
  try {
    const url = `${API_HOST}/api/historial/${userId}`;
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log("Solicitud fallida", error);
  }
}
