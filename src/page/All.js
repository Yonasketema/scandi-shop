import React from "react";
import { useParams } from "react-router-dom";
import { CardContainer } from "../container/CardContainer";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class All extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { products: null };

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
      });
  }

  componentDidMount() {
    this.fetch(`${this.props.params.id}`);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.params.id !== this.props.params.id) {
      this.fetch(`${this.props.params.id}`);
    }
  }

  render() {
    const { products } = this.state;

    if (products === null) {
      return <p>loading...</p>;
    }

    return (
      <div>
        <p style={{ margin: "6rem 0", fontSize: "3rem" }}>
          {products.name.toUpperCase()}
        </p>
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
              <CardContainer item={product} />
            </div>
          ))}
          ;
        </div>
      </div>
    );
  }
}

export default withParams(All);
