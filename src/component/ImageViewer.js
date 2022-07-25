/** @jsxImportSource @emotion/react */
import React from "react";

function ImageViewer({ imgs, productName }) {
  const [imageIndex, setImageIndex] = React.useState(0);
  return (
    <>
      <div
        css={{
          width: "5rem",
        }}
      >
        {imgs.map((img, i) => (
          <img
            src={img}
            alt={`${productName}`}
            onClick={() => setImageIndex(i)}
          />
        ))}
      </div>
      <div
        style={{
          width: "27rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          objectFit: "cover",
        }}
      >
        <img
          style={{
            width: "100%",
          }}
          src={`${imgs[imageIndex]}`}
          alt={productName}
        ></img>
      </div>
    </>
  );
}

export default ImageViewer;
