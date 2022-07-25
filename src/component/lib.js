import styled from "@emotion/styled";
import ArrowIcon from "./Vector.svg";
import { NavLink } from "react-router-dom";

const Arrow = styled.img((props) => ({
  width: "1rem",
  transform: props.rotate ? "rotate(180deg)" : "",
}));

const Center = styled.div({
  width: "80%",
  margin: "0 auto",
  marginBottom: "5rem",
});

const P = styled.p((props) => ({
  margin: "6rem 0",
  fontSize: props.fontSize,
}));
const StyledNavLink = styled(NavLink)({
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
});

const SwatchButton = styled.button((props) => ({
  padding: ".3rem .3rem",
  border: props.selected && "1px solid #127123",
  backgroundColor: props.backgroundColor,
  margin: " 0 .2rem",
}));

const TextButton = styled.button((props) => ({
  padding: ".2em .4em",
  border: "1.7px solid #000",
  backgroundColor: props.selected ? "#000" : "#fff",
  color: props.selected ? "#fff" : "#000",
  margin: "0 .2rem",
}));

const OrderButton = styled.button((props) => ({
  backgroundColor: "green",
  border: "none",
  padding: props.padding,
  color: "#fff",
  fontSize: props.fontSize,
}));
const OverlayContainer = styled.div`
  background-color: rgba(57, 55, 72, 0.22);
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  min-height: 100vh;
  transition: 0.5s ease-in-out;
  z-index: 50;
`;
export const CartOverlayWrapper = styled.div`
  display: inline-flex;
  position: relative;
  padding-right: 15px;
  opacity: 1;
  transition: opacity 250ms linear;
  background-color: red;
`;

export {
  SwatchButton,
  TextButton,
  OrderButton,
  OverlayContainer,
  P,
  StyledNavLink,
  Center,
  Arrow,
};
