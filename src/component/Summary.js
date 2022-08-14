import React from "react";

import { OrderButton } from "./lib";

export default class Summary extends React.Component {
  render() {
    return (
      <>
        <p>Tax 21%: {this.props.tax} </p>
        <p>Quantity: {this.props.quantity}</p>
        <p>Total:{this.props.total} </p>

        <OrderButton fontSize="1rem" padding=".5rem 5rem">
          ORDER
        </OrderButton>
      </>
    );
  }
}
