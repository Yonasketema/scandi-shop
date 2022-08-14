import React from "react";

class ProductInfo extends React.Component {
  render() {
    return (
      <>
        <h1
          style={{
            marginBottom: "1rem",
          }}
        >
          {this.props.name}
        </h1>

        <h3
          style={{
            marginBottom: "1rem",
          }}
        >
          {this.props.brand}
        </h3>

        <h3
          style={{
            marginBottom: "1rem",
          }}
        >
          {this.props.amount}
          {this.props.currency}
        </h3>
      </>
    );
  }
}

export default ProductInfo;
