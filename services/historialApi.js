import jwt_decode from "jwt-decode";
const API_HOST = "https://tp2-proyecto-final.herokuapp.com";

export default async function getHistorial(token) {
  try {
    const decoded = jwt_decode(token);
    const url = `${API_HOST}/api/historial/${decoded._id}`;
    const response = await fetch(url, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.log("Solicitud fallida", error);
  }
}
