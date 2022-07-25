import React from "react";
import logo from "./../logo.svg";
import Switch from "./Switch.js";

import { StyledNavLink as NavLink } from "./lib";

class Header extends React.PureComponent {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100px",
          margin: "0 auto",
          fontSize: "1.3rem",
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
        <Switch />
      </div>
    );
  }
}

export default Header;
