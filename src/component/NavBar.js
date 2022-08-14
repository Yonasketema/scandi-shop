/** @jsxImportSource @emotion/react */

import React, { Component } from "react";
import { Link } from "react-router-dom";

import cart from "./cart.svg";
import { OrderButton, OverlayContainer } from "./lib";
import { CartContainer } from "../container/CartContainer";
import { small } from "../style/media-query";
import { CurrencySwitcherContainer } from "../container/currencySwitcherContainer";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };

    this.onClickIcon = this.onClickIcon.bind(this);
  }

  onClickIcon() {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (!prevState.open) {
  //     document.body.style.overflowY = "hidden";
  //   } else {
  //     document.body.style.overflowY = "scroll";
  //   }
  // }

  render() {
    const { open } = this.state;

    return (
      <>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            position: "relative",
          }}
        >
          <>
            <CurrencySwitcherContainer />
          </>
          <div>
            <button
              style={{
                background: "transparent",
                border: "none",
                position: "relative",
              }}
              onClick={this.onClickIcon}
            >
              {this.props.quantity !== 0 ? (
                <h4
                  style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    borderRadius: "50%",
                    width: "1.3rem",
                    height: "1.2rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    right: "-1rem",
                    top: "-.5rem",
                  }}
                >
                  {this.props.quantity}
                </h4>
              ) : null}

              <img src={cart} alt="logo" />
            </button>
            {open && (
              <div
                css={{
                  [small]: {
                    width: "80%",
                  },

                  width: "30vw",
                  height: "82vh",
                  position: "fixed",
                  transform: " translateX(-90%)",
                  backgroundColor: "#fff",
                  zIndex: "1000",
                  padding: "0 1rem",
                }}
              >
                <h6
                  style={{
                    margin: ".7rem 0",
                  }}
                >
                  My Bag: {this.props.quantity} items
                </h6>
                <div
                  className="scrollbar"
                  id="style-15"
                  style={{
                    height: "70%",
                    gap: "3rem",
                    zIndex: "999",
                    overflowY: "scroll",
                    overflowX: "hidden",
                  }}
                >
                  <CartContainer />
                </div>
                <h6
                  style={{
                    margin: "1rem 0",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  Total <span>{this.props.total}</span>
                </h6>
                <div
                  style={{
                    display: "flex",
                    flexBasis: "50%",
                    justifyContent: "space-between",
                  }}
                >
                  <Link
                    to="/cart"
                    style={{
                      flexBasis: "45%",
                      padding: "1rem 1.5rem",
                      //  padding: ".4rem",
                      textAlign: "center",
                      fontSize: ".7rem",
                      color: "#000",

                      border: "2px solid #000",
                    }}
                    onClick={this.onClickIcon}
                  >
                    VIEW BAG
                  </Link>
                  <OrderButton
                    style={{
                      flexBasis: "45%",
                    }}
                    fontSize=".7rem"
                    padding="1rem 1.5rem"
                  >
                    CHECK OUT
                  </OrderButton>
                </div>
              </div>
            )}
          </div>
        </div>

        {open && <OverlayContainer />}
      </>
    );
  }
}

export default NavBar;
