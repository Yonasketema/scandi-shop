import React from "react";
import logo from "./../logo.svg";

// import { StyledNavLink as NavLink } from "./lib";

import { NavBarContainer } from "../container/NavBarContainer";
import { NavLink } from "react-router-dom";

class Header extends React.PureComponent {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100px",
          fontSize: "1.2rem",
        }}
      >
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontWeight: 300,
            gap: "2rem",
          }}
        >
          <NavLink
            to="/all"
            style={{
              padding: "1rem 1rem 1.5rem 1rem",
            }}
            end
          >
            All
          </NavLink>
          <NavLink
            to="/clothes"
            style={{
              padding: "1rem 1rem 1.5rem 1rem",
            }}
            end
          >
            Cloth
          </NavLink>
          <NavLink
            to="/tech"
            style={{
              padding: "1rem 1rem 1.5rem 1rem",
            }}
            end
          >
            Tech
          </NavLink>
        </nav>

        <div>
          <img src={logo} alt="logo" />
        </div>
        <NavBarContainer />
      </div>
    );
  }
}

export default Header;
