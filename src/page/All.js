import React from "react";
import { NavLink, useParams } from "react-router-dom";
import Card from "./../component/Card";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class All extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: null, link: this.props.params.id };
    this.link = this.props.params.id;

    this.query = `
    query product ($input:CategoryInput){
  
      category(input:$input){
        name
        products{
          id
          inStock
          name
          gallery
          category
          prices{
            amount 
            currency{
              symbol
              label
            }
          }
        }
      }
  
    }
  `;
  }

  fetch(id) {
    fetch("http://localhost:4000/", {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        query: this.query,
        variables: { input: { title: id } },
      }),
    })
      .then((response) => response.json())
      .then(({ data }) => {
        this.setState((state) => ({ ...state, products: data.category }));
        //console.log(data);
      });
  }

  // componentDidUpdate() {
  //   // console.log(this.props.params.id);
  //   fetch("http://localhost:4000/", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json;charset=UTF-8",
  //     },
  //     body: JSON.stringify({
  //       query: this.query,
  //       // variables: { input: { title: "tech" } },
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then(({ data }) => {
  //       this.setState((state) => ({ ...state, products: data.category }));
  //       //console.log(data);
  //     });
  // }

  componentDidMount() {
    this.fetch(`${this.state.link}`);
  }
  componentDidUpdate() {
    this.fetch(`${this.props.params.id}`);
    //  this.fetch(`${this.state.link}`);
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.params.id === this.props.params.id) {
      return false;
    }
    return true;
  }

  render() {
    const { products } = this.state;

    if (products === null) {
      return <p>loading...</p>;
    }

    return (
      <div>
        <p style={{ margin: "6rem 0", fontSize: "3rem" }}>{products.name}</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0 auto",
          }}
        >
          {products?.products.map((product) => (
            <div key={product.id}>
              <Card item={product} />
            </div>
          ))}
          ;
        </div>
      </div>
    );
  }
}

export default withParams(All);
