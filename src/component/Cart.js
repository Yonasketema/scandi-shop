/** @jsxImportSource @emotion/react */

import React from "react";
import { SwatchButton, TextButton } from "./lib";
import { OverlayContainer } from "../container/OveryContainer";

function CartViewer({ product, order, large, id, quantity }) {
  return (
    <div
      style={{
        padding: large ? "1.5rem 1rem" : "0 1rem",
        display: "flex",
        textAlign: "left",
        justifyContent: "space-between",
        borderBottom: large && "1px solid #999",
        marginBottom: "2.5rem",
        color: "#333",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
        }}
      >
        <p
          style={{
            fontWeight: "500",
            fontSize: large ? "2rem" : "1rem",
          }}
        >
          {product.brand}
        </p>
        <p
          style={{
            fontSize: large ? "2.5rem" : "1rem",
            fontWeight: "100",
          }}
        >
          {product.name}
        </p>
        <h3
          style={{
            fontSize: large ? "1.5rem" : "1rem",
            fontWeight: "bold",
            color: "#000",
          }}
        >
          3000$
        </h3>
        <div>
          {product.attributes.map((attribute) => (
            <div
              style={{
                fontSize: ".7rem",
                marginBottom: large ? "1rem" : ".5rem",
              }}
            >
              <p
                style={{
                  fontSize: large ? ".8rem" : ".7rem",

                  marginBottom: large ? ".4rem" : ".2rem",
                }}
              >
                {attribute.name.toUpperCase()}:
              </p>
              <div>
                {attribute.type === "swatch"
                  ? attribute.items.map((items) => (
                      <SwatchButton
                        selected={
                          order?.[attribute.name] === items.displayValue
                        }
                        backgroundColor={items?.value}
                      ></SwatchButton>
                    ))
                  : attribute.items.map((items) => (
                      <TextButton
                        selected={
                          order?.[attribute.name] === items?.displayValue
                        }
                      >
                        {items.value}
                      </TextButton>
                    ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <OverlayContainer
          imgs={product.gallery}
          large={large}
          quantity={quantity}
          id={id}
        />
      </div>
    </div>
  );
}

export default CartViewer;
