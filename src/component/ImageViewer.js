/** @jsxImportSource @emotion/react */
import React from "react";

class ImageViewer extends React.Component {
  state = { imageIndex: 0 };
  imgs = this.props.imgs;
  productName = this.props.productName;
  render() {
    return (
      <>
        <div
          css={{
            width: "5rem",
          }}
        >
          {this.imgs.map((img, i) => (
            <img
              src={img}
              alt={`${this.productName}`}
              onClick={() => this.setState({ imageIndex: i })}
            />
          ))}
        </div>
        <div
          style={{
            width: "27rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            objectFit: "cover",
          }}
        >
          <img
            style={{
              width: "100%",
            }}
            src={`${this.imgs[this.state.imageIndex]}`}
            alt={this.productName}
          ></img>
        </div>
      </>
    );
  }
}

export default ImageViewer;
