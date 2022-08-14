import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./component/Header";
import { ProductPageContainer } from "./container/ProductPageContainer";
import { CartContainer } from "./container/CartContainer";
import { Center } from "./component/lib";
import All from "./page/All";
class App extends React.Component {
  render() {
    return (
      <Center>
        <div>
          <Router>
            <Header />
            <Routes>
              <Route path="/:id" element={<All />} />
              <Route path="/product/:id" element={<ProductPageContainer />} />
              <Route path="/cart" element={<CartContainer large={true} />} />
              <Route path="*" element={<Navigate to="/all" />} />
            </Routes>
          </Router>
        </div>
      </Center>
    );
  }
}

export default App;
