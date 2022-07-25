import React from "react";

function Overy({
  imgs,
  large,
  id,
  quantity,
  addQuantity = () => {},
  minQuantity = () => {},
}) {
  const [index, setIndex] = React.useState(0);

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            marginBottom: "1rem",
            padding: ".4rem",
            fontSize: "1.2rem",
            border: "2px solid #000",
          }}
          onClick={() => addQuantity(id)}
        >
          <h6>+</h6>
        </div>
        <h4>{quantity}</h4>
        <div
          style={{
            padding: ".4rem",
            fontSize: "1.2rem",
            border: "2px solid #000",
          }}
          onClick={() => minQuantity(id)}
        >
          -
        </div>
      </div>
      <div
        style={{
          width: large ? "16rem" : "8rem",
          objectFit: "cover",
          position: "relative",
          // height: "100px",
        }}
      >
        <img
          style={{
            height: "100%",
          }}
          src={imgs[index]}
          alt=""
        ></img>

        {/*  */}
        <div
          style={{
            position: "absolute",
            right: "16px",
            bottom: "16px",
          }}
        >
          <button
            style={{
              opacity: index === 0 && 0,
              backgroundColor: "#00007",
              border: "none",
              padding: ".5rem",
            }}
            onClick={() => {
              setIndex((index) => (index > 0 ? (index = index - 1) : index));
            }}
          >
            🤛
          </button>
          <button
            style={{
              opacity: index === imgs.length - 1 && 0,
              backgroundColor: "#00007",
              border: "none",
              padding: ".5rem",
              //   disable
            }}
            onClick={() => {
              setIndex((index) =>
                index < imgs.length - 1 ? (index = index + 1) : index
              );
            }}
          >
            🤜
          </button>
        </div>
      </div>
    </div>
  );
}

export default Overy;
