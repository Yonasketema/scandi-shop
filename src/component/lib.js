import styled from "@emotion/styled";

import { NavLink } from "react-router-dom";
import { primary } from "../style/color";

const Arrow = styled.img((props) => ({
  width: "1rem",
  transform: props.rotate ? "rotate(180deg)" : "",
}));

const Center = styled.div({
  width: "80%",
  margin: "0 auto",
  marginBottom: "5rem",
});

const Title = styled.p((props) => ({
  margin: "6rem 0",
  fontSize: props.fontSize,
}));

const StyledNavLink = styled(NavLink)({
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
});

const SwatchButton = styled.button((props) => ({
  padding: ".5rem .5rem",
  //border:  "none",
  backgroundColor: props.backgroundColor,
  outline: props.selected && `2px solid ${primary}`,
  outlineOffset: "2px",
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
  backgroundColor: primary,
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
  StyledNavLink,
  Center,
  Arrow,
  Title,
};
