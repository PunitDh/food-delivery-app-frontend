import styled from "@emotion/styled";
import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import React, { useState } from "react";
import { formatCurrency } from "../../../utils";
import "./itemcard.css";

const Container = styled.div({
  width: "160px",
  height: "180px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
  margin: "10px",
  // boxShadow: "0 0 50px rgba(0, 0, 0, 0.15)",
  border: "1px solid rgba(0, 0, 0, 0.1)",
});

const ImgBox = styled.div({
  width: "100px",
  height: "100px",
  borderRadius: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "5px",
  position: "absolute",
  top: "-10px",
});

const FavoriteContainer = styled.div({
  position: "absolute",
  top: "80px",
  right: "10px",
  transition: "0.5s",
  cursor: "pointer",
});

const ItemContent = styled.div({
  backgroundColor: "white",
  boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)",
  borderRadius: "15px",
  padding: "10px",
  paddingTop: "50px",
  width: "100%",
});

const ItemName = styled.h3({
  fontSize: "16px",
});

const Bottom = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const Ratings = styled.div({
  cursor: "pointer",
  fontSize: "12px",
});

const Price = styled.h3({
  fontSize: "16px",
  color: "#F8901C",
});

const AddToCart = styled.i({
  backgroundColor: "#F8901C",
  width: "25px",
  height: "25px",
  borderRadius: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)",
  cursor: "pointer",
});

const PriceAmount = styled.span({
  color: "rgba(0, 0, 0, 0.6)",
  fontSize: "14px",
});

const ItemCard = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentRating, setCurrentRating] = useState(Math.floor(item.rating));

  const handleRating = (value) => () => setCurrentRating(value);

  return (
    <Container>
      <FavoriteContainer>
        <Favorite
          className={`favorite-icon ${isFavorite ? "active" : ""}`}
          onClick={() => setIsFavorite(!isFavorite)}
        />
      </FavoriteContainer>
      <ImgBox>
        <img src={item.image} alt="" className="item-img" />
      </ImgBox>

      <ItemContent>
        <ItemName>{item.name}</ItemName>

        <Bottom>
          <Ratings>
            {Array.apply(0, { length: 5 }).map((e, i) => (
              <i
                key={i}
                className={`rating ${currentRating > i ? "orange" : "grey"}`}
                onClick={handleRating(i + 1)}
              >
                <StarRounded className="rating-star" />
              </i>
            ))}

            <Price>
              $<PriceAmount>{formatCurrency(item.price)}</PriceAmount>
            </Price>
          </Ratings>

          <AddToCart>
            <AddRounded />
          </AddToCart>
        </Bottom>
      </ItemContent>
    </Container>
  );
};

export default ItemCard;
