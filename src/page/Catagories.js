import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNavLink } from "../component/lib";
import Card from "./../component/Card";

class All extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: null };
    this.query = `
    query product (){
  
      category(input:{title:"all"}){
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

  componentDidMount() {
    fetch("http://localhost:4000/", {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        query: this.query,
        // variables: { input: { title: "tech" } },
      }),
    })
      .then((response) => response.json())
      .then(({ data }) => {
        this.setState((state) => ({ ...state, products: data.category }));
        //console.log(data);
      });
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

export default All;
