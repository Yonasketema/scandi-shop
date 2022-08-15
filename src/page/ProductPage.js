/** @jsxImportSource @emotion/react */

import React from "react";
import { useParams } from "react-router-dom";
import ImageViewer from "../component/ImageViewer";
import parse from "html-react-parser";

import { OrderButton, SwatchButton, TextButton } from "../component/lib";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: null, order: null, price: null };
    this.addToCart = this.props.addToCart;

    this.query = `
    query product ($id:String!) {
  
        product(id:$id){
            id
            name
            inStock 
            gallery
            description
            category
            attributes {
              id
              name
              type
              items {
                displayValue
                value
                id
              }
            }
            
            prices {
              currency{
                label
                symbol
              }
              amount
            }
            brand
          }
  
    }
  `;
  }

  componentDidMount() {
    let { id } = this.props.params;
    fetch("http://localhost:4000/", {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        query: this.query,
        variables: { id: `${id}` },
      }),
    })
      .then((response) => response.json())
      .then(({ data }) => {
        const price = data.product.prices.find(
          (price) => price.currency.label === this.props.currency.value
        );
        this.setState((state) => ({
          ...state,
          product: data.product,
          price,
        }));
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currency.value !== this.props.currency.value) {
      const price = this.state.product.prices.find(
        (price) => price.currency.label === this.props.currency.value
      );
      this.setState((state) => ({ ...state, price }));
    }
  }

  render() {
    const { product, order } = this.state;

    if (product === null) {
      return <p>loading...</p>;
    }

    return (
      <div
        css={{
          display: "flex",
          gap: "3rem",
        }}
      >
        <ImageViewer imgs={product.gallery} productName={product.name} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            maxWidth: "25rem",
          }}
        >
          <div>
            <h1
              style={{
                marginBottom: "1rem",
              }}
            >
              {product.name}
            </h1>

            <h3
              style={{
                fontWeight: "500",
                marginBottom: "1rem",
              }}
            >
              {product.brand}
            </h3>

            <h3
              style={{
                marginBottom: "1rem",
              }}
            >
              {this.state.price?.amount}
              {this.state.price?.currency.symbol}
            </h3>

            {product.attributes.map((attribute, i) => (
              <div
                key={attribute.name}
                style={{
                  marginBottom: "1rem",
                }}
              >
                <p
                  style={{
                    marginBottom: ".4rem",
                  }}
                >
                  {attribute.name}
                </p>
                <div
                  key={attribute.name}
                  style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${attribute.items.length},1fr)`,
                  }}
                >
                  {attribute.type === "swatch"
                    ? attribute.items.map((items) => (
                        <SwatchButton
                          key={items.displayValue}
                          style={{
                            padding: "1rem",
                          }}
                          selected={
                            order?.[attribute.name] === items.displayValue
                          }
                          backgroundColor={items?.value}
                          onClick={() => {
                            this.setState((state) => ({
                              ...state,
                              order: {
                                ...state.order,
                                [attribute.name]: items?.displayValue,
                              },
                            }));
                          }}
                        ></SwatchButton>
                      ))
                    : attribute.items.map((items) => (
                        <TextButton
                          key={items.displayValue}
                          style={{
                            padding: "1rem",
                          }}
                          selected={
                            order?.[attribute.name] === items?.displayValue
                          }
                          onClick={() => {
                            this.setState((state) => ({
                              ...state,
                              order: {
                                ...state.order,
                                [attribute.name]: items.displayValue,
                              },
                            }));
                          }}
                        >
                          {items.value}
                        </TextButton>
                      ))}
                </div>
              </div>
            ))}
          </div>
          <OrderButton
            padding="1rem 3rem"
            onClick={() => {
              this.addToCart(this.state);
            }}
          >
            ADD TO CART
          </OrderButton>
          <>{parse(`${product.description}`)}</>
        </div>
      </div>
    );
  }
}

export default withParams(Product);
