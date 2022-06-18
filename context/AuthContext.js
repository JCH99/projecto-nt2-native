import React, { createContext, useState } from "react";

import * as usersApi from "../services/usersApi";

//1er paso: crear el contexto
export const AuthContext = createContext();

//2do paso: crear el Provider
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  async function signIn(email, password) {
    // Del lado de backend habrá una función para loguearse. A esta función le vamos a mandar el email y password y en el backend se harán las validaciones correspondientes
    const response = await usersApi.login(email, password);
    setToken(response.token);
    usersApi.defaults.headers.Authorization = `Bearer ${response.token}`;
  }

  function signOut() {
    setToken(null);
  }

  return (
    <AuthContext.Provider value={{ token, signIn, signOut }}>
      {/* 1 a N componentes que van a consumir el contexto */}
      {children}
    </AuthContext.Provider>
  );
};
