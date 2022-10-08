import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { formatCurrency } from "../../utils";
import { addToCart, removeFromCart } from "../../api/cartHelper";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;

  div {
    flex: 1;
  }

  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
  }
`;

const CartItem = ({ item, setQuantityUpdateSuccess }) => {
  const price = formatCurrency(item.price);

  const handleAddToCart = () => {
    addToCart(item.id).then(() => {
      setQuantityUpdateSuccess(
        (quantityUpdateSuccess) => !quantityUpdateSuccess
      );
    });
  };

  const handleRemoveFromCart = () => {
    removeFromCart(item.id).then(() => {
      setQuantityUpdateSuccess(
        (quantityUpdateSuccess) => !quantityUpdateSuccess
      );
    });
  };
  return (
    <Wrapper>
      <div>
        <h3>{item.name}</h3>
        <div className="information">
          <p>Price: ${price}</p>
          <p>Total: ${(item.quantity * price).toFixed(2)}</p>
        </div>
        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={handleRemoveFromCart}
          >
            -
          </Button>
          <p>{item.quantity}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={handleAddToCart}
          >
            +
          </Button>
        </div>
      </div>
      <img src={item.image} alt={item.name} />
    </Wrapper>
  );
};

export default CartItem;
