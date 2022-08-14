import React, { Component } from "react";
// imgs,
// large,
// id,
// quantity,
// addQuantity = () => {},
// minQuantity = () => {},

class ImageSlider extends Component {
  // const [index, setIndex] = React.useState(0);

  state = { index: 0 };

  render() {
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
            alignItems: "center",
          }}
        >
          <button
            style={{
              padding: ".4rem",
              fontSize: "1.2rem",
              border: "2px solid #000",
              background: "transparent",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => this.props.addQuantity(this.props.id)}
          >
            <h6
              style={{
                padding: this.props.large ? ".5rem" : ".1rem",
              }}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 1V16"
                  stroke="#1D1F22"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 8.5H16"
                  stroke="#1D1F22"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </h6>
          </button>
          <h4
            style={{
              fontSize: this.props.large ? "2rem" : "1rem",
            }}
          >
            {this.props.quantity}
          </h4>
          <button
            style={{
              padding: ".4rem",
              fontSize: "1.2rem",
              border: "2px solid #000",
              background: "transparent",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => {
              this.props.minQuantity(this.props.id);
            }}
          >
            <h6
              style={{
                padding: this.props.large ? ".5rem" : ".1rem",
              }}
            >
              <svg
                width="17"
                height="1"
                viewBox="0 0 17 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 0.5H16"
                  stroke="#1D1F22"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </h6>
          </button>
        </div>
        <div
          style={{
            width: this.props.large ? "16rem" : "9rem",
            objectFit: "cover",
            position: "relative",
            // height: "100px",
          }}
        >
          <img
            style={{
              height: "100%",
            }}
            src={this.props.imgs[this.state.index]}
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
                opacity: this.state.index === 0 && 0,
                border: "none",
              }}
              onClick={() => {
                this.setState(({ index }) => ({
                  index: index > 0 ? (index = index - 1) : index,
                }));
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" fill="black" fill-opacity="0.73" />
                <path
                  d="M14.25 6.06857L8.625 11.6876L14.25 17.3066"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              style={{
                opacity: this.state.index === this.props.imgs.length - 1 && 0,
                border: "none",

                //disable
              }}
              onClick={() => {
                this.setState(({ index }) => ({
                  index:
                    index < this.props.imgs.length - 1
                      ? (index = index + 1)
                      : index,
                }));
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="24"
                  height="24"
                  transform="matrix(-1 0 0 1 24 0)"
                  fill="black"
                  fill-opacity="0.73"
                />
                <path
                  d="M9.75 6.06857L15.375 11.6876L9.75 17.3066"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageSlider;
