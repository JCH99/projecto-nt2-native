const API_HOST = "https://tp2-proyecto-final.herokuapp.com";

export async function login(email, password) {
  try {
    const url = `${API_HOST}/api/users/login`;
    const user = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await user.json();
    return result;
  } catch (error) {
    console.log("No autorizado", error);
  }
}

export const defaults = {
  headers: {
    Authorization: "",
  },
};
