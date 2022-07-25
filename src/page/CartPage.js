import CartViewer from "../component/Cart";
import Summary from "../component/Summary";
import { SummaryContainer } from "../container/summaryContainer";

export default function Cart({ data, large }) {
  return (
    <>
      {data.map((product) => {
        return (
          <CartViewer
            key={product.id}
            product={product.product}
            order={product.order}
            large={large}
            id={product.id}
            quantity={product.quantity}
          />
        );
      })}
      {large && <SummaryContainer />}
    </>
  );
}
