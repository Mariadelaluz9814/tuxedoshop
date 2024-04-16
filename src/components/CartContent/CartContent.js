import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import Navbar from "../Navbar/Navbar";

const CartContent = () => {
    const { cart } = useContext(dataContext);

  return (
    <>
    <Navbar/>
    {cart.length > 0 ? (
      <>
      <CartElements/>
      <CartTotal/>
      </>
    ): (
      <h2 className="cart-messagge-center">No has rentado nada</h2>
    )}
    </>
  )
}

export default CartContent