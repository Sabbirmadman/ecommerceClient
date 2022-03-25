import "./App.css";

import {
    BrowserRouter as Router,
    Navigate,
    Routes,
    Route,
} from "react-router-dom";

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

function App() {
    const user = true;

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/products/:catagory" element={<ProductList />} />
                <Route path="/cart" element={<Cart />} />
                <Route
                    path="/login"
                    element={!user ? <Login /> : <Navigate to="/" replace />}
                />
            </Routes>
        </Router>
    );
}

export default App;
