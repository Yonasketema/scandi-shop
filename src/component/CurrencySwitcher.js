/** @jsxImportSource @emotion/react */

import React, { Component } from "react";
import { Arrow } from "./lib";
import ArrowIcon from "./Vector.svg";
import { css } from "@emotion/react";

const options = [
  { label: "$", value: "USD" },
  { label: "£", value: "GBP" },
  { label: "¥", value: "JPY" },
  { label: "A$", value: "AUD" },
  { label: "₽", value: "RUB" },
];

export default class CurrencySwitcher extends Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
    this.ref = React.createRef();
  }

  componentDidMount() {
    document.body.addEventListener("click", (event) => {
      if (this.ref.current?.contains(event.target)) {
        return;
      }
      this.setState((state) => ({ open: false }));
    });
  }

  render() {
    return (
      <div
        ref={this.ref}
        style={{
          zIndex: 9999,
          minWidth: "5rem",
          textAlign: "center",
        }}
      >
        <div
          onClick={() => {
            this.setState((state) => ({ open: !state.open }));
          }}
          style={{
            padding: ".1rem 1rem",
            display: "flex",
          }}
        >
          <p>{this.props.currency.label}</p>
          <span>
            <Arrow src={ArrowIcon} rotate={this.state.open} />
          </span>
        </div>
        <div
          style={{
            padding: ".1rem",
            display: this.state.open ? "" : "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              backgroundColor: "#fff",
              //border: "1px solid red",
              marginTop: ".5rem",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            {options?.map((option) => {
              if (this.props.currency.value === option.value) {
                return null;
              }
              return (
                <div
                  key={option.value}
                  onClick={() => {
                    this.props.switchCurrency(option);
                    this.setState((state) => ({ open: !state.open }));
                  }}
                  css={css`
                    dispaly: flex;
                    justify-content: space-between;
                    padding: 0.4rem 1rem;
                    cursor: default;
                    &:hover {
                      background-color: #e4e5e9;
                    }
                  `}
                >
                  <span> {option.label} </span>
                  <span>{option.value}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
