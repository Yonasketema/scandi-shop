import React, { useEffect, useRef } from "react";
import { Arrow } from "./lib";
import ArrowIcon from "./Vector.svg";

const options = [
  { label: "$", value: "USD" },
  { label: "£", value: "GBP" },
  { label: "¥", value: "JPY" },
  { label: "A$", value: "AUD" },
  { label: "₽", value: "RUB" },
];

export default function DropDown({ currency, switchCurrency = () => {} }) {
  const [open, setOpen] = React.useState(false);

  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    });
  }, []);

  const renderOptions = options.map((option) => {
    if (currency.value === option.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        onClick={() => {
          switchCurrency(option);
          setOpen(!open);
        }}
        style={{
          backgroundColor: "#9999",
        }}
      >
        {option.label} {option.value}
      </div>
    );
  });
  return (
    <div
      ref={ref}
      style={{
        zIndex: 9999,
      }}
    >
      <div
        onClick={() => setOpen(!open)}
        style={{
          padding: ".1rem 1rem",
          display: "flex",
        }}
      >
        <p>{currency.label}</p>
        <span>
          <Arrow src={ArrowIcon} rotate={open} />
        </span>
      </div>
      <div
        style={{
          padding: ".1rem",
          display: open ? "" : "none",
        }}
      >
        <div
          style={{
            position: "absolute",

            marginTop: ".5rem",
          }}
        >
          {renderOptions}
        </div>
      </div>
    </div>
  );
}
