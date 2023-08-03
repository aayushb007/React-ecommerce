import {
  BrowserRouter,
  
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import {useState} from 'react';
import NavBar from "./components/NavBar";
import ProductList from "./components/feature/ProductList";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import ProductState from "./context/ProductState";
import Cart from "./components/feature/Cart";
import Alert from "./components/feature/Alert";

function App() {
  const [msg ,setMsg] = useState("Welcome to IBuy");
  return (
    <> 
    <Alert msg={msg}  />
       <ProductState>
       <BrowserRouter>
   
          <NavBar />
         
          <Routes>
            
            <Route path="/" element={<ProductList />}  />

            <Route path="/login" element={<SignIn />}   />

            <Route path="/signup" element={<SignUp />}  />

            <Route path="/cart" element={<Cart />}  />

          </Routes>
        </BrowserRouter>
        </ProductState>
  
    </>
  );
}

export default App;
