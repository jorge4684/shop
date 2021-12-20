import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pay from "./components/Pay";
import Success from "./components/Success";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";


function App() {
    const user = true
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
          
        
            <Route path="/products/:category" exact element={<ProductList />} />
          
        
            <Route path="/product/:id" exact element={<Product />} />
          
        
            <Route path="/cart" exact element={<Cart />} />
            <Route path="/pay" exact element={<Pay />} />
            <Route path="/success" exact element={<Success />} />
          
        
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>
            
        
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}/>
            </Routes>
        </Router>
      </div>
    );
  }

export default App;
