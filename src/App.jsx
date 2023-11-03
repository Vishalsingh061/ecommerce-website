import Home from "./pages/Home"
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";

const App = () => {

    return (<BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/products/:category" element={<ProductList />} />
                    <Route exact path="/product" element={<Product />} />
                    <Route exact path="/cart" element={<Cart />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
    )
}

export default App;
