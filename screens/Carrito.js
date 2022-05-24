import React from "react";
import CardProducto from "../components/Home/CardProducto";

const data = [
  {
    title: "combo papitas con birra",
    img: "https://images.unsplash.com/photo-1604307078172-9b46710cc5af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1101&q=80",
  },
  {
    title: "combo 2",
    img: "https://images.unsplash.com/photo-1627935722051-395636b0d8a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
  },
  {
    title: "combo 3",
    img: "https://images.unsplash.com/photo-1604634077336-1429372af4be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "combo 4",
    img: "https://images.unsplash.com/photo-1600891965483-0a429ebf9076?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1082&q=80",
  },
  {
    title: "combo 5",
    img: "https://images.unsplash.com/photo-1561668048-fe9c092832e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  },
];

const Carrito = () => {
  return <CardProducto data={data}></CardProducto>;
};

export default Carrito;