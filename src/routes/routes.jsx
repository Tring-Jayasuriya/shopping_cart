import { Route, Routes } from "react-router";
import { ShoppingGrid } from "../components/ShoppingGrid";
import { Cart } from "../components/Cart";
import App from "../App";

const Router = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<App/>}> */}
      <Route path="/" element={<ShoppingGrid />} />
      <Route path="/cart" element={<Cart />} />
      {/* </Route> */}
    </Routes>
  );
};

export default Router;
