/** @jsxImportSource @emotion/react */

import { SwatchButton, TextButton } from "./lib";
import { ImageSliderContainer } from "../container/ImageSliderContainer";
import { gray20, gray80 } from "../style/color";

function CartViewer({ product, order, large, id, quantity, currency }) {
  const price = product.prices.find(
    (price) => price.currency.label === currency.value
  );
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        textAlign: "left",
        padding: large && "1.5rem 1rem",
        borderBottom: large && `1px solid ${gray20}`,
        marginBottom: "2.5rem",
        color: gray80,
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
          {price?.amount}
          {price?.currency.symbol}
        </h3>
        <div>
          {product.attributes.map((attribute) => (
            <div
              key={attribute.name}
              style={{
                fontSize: ".7rem",
                marginBottom: large ? "1rem" : ".5rem",
              }}
            >
              <p
                style={{
                  fontSize: large ? "1rem" : ".7rem",
                  marginBottom: large ? ".4rem" : ".2rem",
                }}
              >
                {attribute.name.toUpperCase()}:
              </p>
              <div>
                {attribute.type === "swatch"
                  ? attribute.items.map((items) => (
                      <SwatchButton
                        key={items.displayValue}
                        selected={
                          order?.[attribute.name] === items.displayValue
                        }
                        backgroundColor={items?.value}
                        style={{
                          padding: large && "1rem",
                        }}
                      ></SwatchButton>
                    ))
                  : attribute.items.map((items) => (
                      <TextButton
                        key={items.displayValue}
                        style={{
                          padding: large && "1rem",
                        }}
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
        <ImageSliderContainer
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
