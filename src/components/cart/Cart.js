import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import CartItem from "./CartItem";
import { getItemsInCurrentCart } from "../../api/cartHelper";
import { formatCurrency, getCartIdFromJWT } from "../../utils";
import { Button } from "@mui/material";

const Wrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  padding: 20px;
`;

const ButtonContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "20px",
});

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const [quantityUpdateSuccess, setQuantityUpdateSuccess] = useState(false);

  useEffect(() => {
    getItemsInCurrentCart(getCartIdFromJWT()).then((response) => {
      setCartItems(response.data);
    });
  }, [quantityUpdateSuccess]);

  const calculateTotal = () => {
    return cartItems.reduce(
      (acc, current) => acc + current.price * current.quantity,
      0
    );
  };

  return (
    <>
      <Wrapper>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? <p>No items in cart.</p> : null}
        {cartItems
          .sort((current, next) => next.id - current.id)
          .map((item) => (
            <CartItem
              key={item.id}
              item={item}
              setQuantityUpdateSuccess={setQuantityUpdateSuccess}
            />
          ))}
        <h2>Total: ${formatCurrency(calculateTotal(cartItems))}</h2>
      </Wrapper>
      <ButtonContainer>
        <Button variant="contained">Proceed to payment</Button>
      </ButtonContainer>
    </>
  );
};

export default Cart;
