import "./App.css";
import Header from './components/Header/Header';
import Footer from './components/Footer';

import ModalSidebar from './components/ModalSidebar';

import Cart from "./components/Cart";

import { useState } from "react";

// ROUTER
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//PAGES
import Home from './pages/Home';
import Page404 from './pages/Page404';
import Product from './pages/Product';
// import Cart from './pages/Cart';

//data in header
const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
};





function App() {

  const [products, setProducts] = useState([]);

  //cart
  const [cart, setCart] = useState([]);

  //modal cart
  const [modalSidebar, setModalSidebar] = useState(false);
 
  //function adding each product to the cart thanks to prdoduct id
  function addToCart(productId){  
    setCart([...cart, { id: productId, quantity: 1}]); 
  // to access to the cart and to build a new array by adding a new object 
  //to render the new product template
  }
  
  //function removing each product by comparing its id and the id product 
  //selected by the user
  function removeFromCart(productId) {
    setCart(cart.filter((product) => product.id !== productId));
    // to filter the cart and to render for each product after have verified 
    //whether there is a match or not. If there isn't a matching, remove the product selcted 
  }
  
  //to set the quantity
  function setProductQuantity(productId, quantity) {
    setCart(
      cart.map((product) =>
        product.id === productId ? { ...product, quantity } : product
      )
    );
  }


  return (
    <Router>
      <div className="App">
        <Header
          logo ={data.logo}
          cart = {cart}
          products = {products}
          setModalSidebar = {setModalSidebar}
        />

        <Switch>

          <Route path = "/product/:id">
            <Product
              addToCart ={addToCart}
            />
          </Route>

          <Route path = "/cart">
          {modalSidebar && <ModalSidebar setModalSidebar={setModalSidebar}>
              <Cart
                cart ={cart}
                products = {products}
                removeFromCart = {removeFromCart} // function as props in modalCart
                setProductQuantity = {setProductQuantity}
                />  
            </ModalSidebar>}
          </Route>

          <Route exact path = "/">
            <Home
              data = {data}
              products = {products}
              setProducts = {setProducts}
            />
          </Route>
          
          <Route path = "*">
            <Page404/>
          </Route>

        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
