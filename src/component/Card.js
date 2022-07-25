//https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000
import React from "react";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { StyledNavLink as NavLink } from "./lib";

function Card({ item }) {
  //console.log(item);
  const currency = useSelector((state) => state.currency.value);
  const inStock = item.inStock;
  const price = item.prices.find((price) => price.currency.label === currency);

  return (
    <NavLink style={{}} to={inStock && `/product/${item.id}`}>
      <div
        style={{
          width: "20rem",
          fontWeight: "200",
          fontSize: "1.4rem",
          opacity: inStock ? "" : ".5",
        }}
      >
        <div
          style={{
            minHeight: "30rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "rgba(196, 196, 196, .2)",
              position: "absolute",
              display: `${inStock ? "none" : "flex"}`,
              justifyContent: "center",
              alignItems: "center",
              columnGap: "6rem",
            }}
          >
            <p
              style={{
                color: "#999",
                zIndex: "1000",
                fontWeight: "500",
              }}
            >
              OUT OF STOCK
            </p>
          </div>
          <img src={item.gallery[0]} alt="" />
        </div>
        <p>{item.name}</p>
        <h6>
          {price.amount}
          {price.currency.symbol}
        </h6>
      </div>
    </NavLink>
  );
}

export default Card;
