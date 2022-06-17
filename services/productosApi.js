const API_HOST = "https://tp2-proyecto-final.herokuapp.com";

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

export async function comprar(carrito) {
  try {
    const url = `${API_HOST}/api/productos/comprar`;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(carrito),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Solicitud fallida", error);
  }
}

