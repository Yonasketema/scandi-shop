/** @jsxImportSource @emotion/react */

import React from "react";
import cart from "./cart.svg";
import { OrderButton, OverlayContainer } from "./lib";
import { CartContainer } from "../container/CartContainer";
import { Link } from "react-router-dom";
import { small } from "../style/media-query";
import DropDown from "./DropDown";
import { CurrencySwitcherContainer } from "../container/currencySwitcherContainer";

function Switch() {
  const [modal, setModal] = React.useState(false);

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
          {/* <DropDown /> */}
        </>
        <div>
          <button
            style={{
              background: "transparent",
              border: "none",
            }}
            onClick={() => setModal((state) => !state)}
          >
            <h4
              style={{
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "50%",
                width: "1rem",
                height: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                right: "-1rem",
                top: "0.5rem",
              }}
            >
              3
            </h4>

            <img src={cart} alt="logo" />
          </button>
          {modal && (
            <div
              css={{
                [small]: {
                  width: "80%",
                },
                width: "27vw",
                height: "70vh",
                position: "fixed",
                transform: " translateX(-90%)",
                backgroundColor: "#fff",
                zIndex: "1000",
              }}
            >
              <div
                className="scrollbar"
                id="style-15"
                style={{
                  height: "80%",
                  gap: "3rem",
                  zIndex: "1000000",
                  overflowY: "scroll",
                  overflowX: "hidden",
                }}
              >
                <CartContainer />
              </div>
              <h6>Total</h6>
              <div
                style={{
                  display: "flex",
                  flexBasis: "50%",
                  justifyContent: "space-around",
                }}
              >
                <Link to="/cart">
                  <button
                    style={{
                      flexBasis: "45%",
                      padding: "1rem 1.5rem",
                    }}
                    onClick={() => setModal((state) => !state)}
                  >
                    VIEW BAG
                  </button>
                </Link>
                <OrderButton
                  style={{
                    flexBasis: "45%",
                  }}
                  padding="1rem 1.5rem"
                >
                  CHECK OUT
                </OrderButton>
              </div>
            </div>
          )}
        </div>
      </div>

      {modal && <OverlayContainer />}
    </>
  );
}

export default Switch;
