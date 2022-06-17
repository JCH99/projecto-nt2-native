import React, { createContext, useReducer } from "react";

// item = {
//     id: id,
//     titulo: String,
//     cantidad: int,
//     precioUnitario,
// }

export const CartContext = createContext({
  items: [],
  total: 0,
  addOne: (item) => {},
  removeOne: (id) => {},
  reset: ()=> {},
});

const defaultCartState = {
  items: [],
  total: 0,
};

const cartReducer = (state, action) => {
  if(action.type === "RESET"){
    return defaultCartState;
  }
  if (action.type === "ADD_ONE") {
    const updatedAmount = state.total + action.item.precioUnitario;

    //Check si existe en el carrito
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    //Si es un item que ya estaba en el carrito suma 1 a la cantidad
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        cantidad: existingCartItem.cantidad + 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    //Si no lo agrega como nuevo item

    return {
      items: updatedItems,
      total: updatedAmount,
    };
  }
  if (action.type === "REMOVE_ONE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    if (existingCartItemIndex !== -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedAmount = state.total - existingItem.precioUnitario;
      let updatedItems;

      //Si solo habia 1, elimina el producto del carrito
      if (existingItem.cantidad === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingItem,
          cantidad: existingItem.cantidad - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      //Si no simplemente le resta uno a la cantidad seleccionada

      return {
        items: updatedItems,
        total: updatedAmount,
      };
    } else {
      return {
        items: state.items,
        total: state.updatedAmount,
      };
    }
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ONE", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ONE", id: id });
  };

  const resetCartHandler = ()=>{
    dispatchCartAction({ type: "RESET" });
  }

  const cartContext = {
    items: cartState.items,
    total: cartState.total,
    addOne: addItemToCartHandler,
    removeOne: removeItemFromCartHandler,
    reset: resetCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
