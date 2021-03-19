import "./App.css";
import Header from './components/Header/Header';
import Footer from './components/Footer';


import { useState, useEffect } from "react";

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
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

//data in header
const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
};



let cache = {};
let cartId;

function App() {
  //cart
  const [cart, setCart] = useState([]);

  ///----------------------///
  async function postItemToCart(cartId, productId, quantity) {
    const response = await fetch(`https://fakestoreapi.com/carts/${cartId}/items`, {
      method: 'POST',
      body: JSON.stringify({ id: productId, quantity })
    });
    const data = await response.json();
    if (response.status >= 400) {
      throw new Error(data.message);
    }
    return data;
  }

  async function deleteItemFromCart(cartId, productId) {
    const response = await fetch(`https://fakestoreapi.com/carts/${cartId}/items/${productId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    if (response.status >= 400) {
      throw new Error(data.message);
    }
    return data;
  }

  async function addToCart(productId) {
    try {
      const cartObj = await postItemToCart(cartId, productId, 1);
      setCart(cartObj.items);
    } catch (error) {
      console.error(`postItemToCart API call response error! ${error.message}`);
    }
  }

  async function removeFromCart(productId) {
    try {
      const cartObj = await deleteItemFromCart(cartId, productId);
      setCart(cartObj.items);
    } catch (error) {
      console.error(`deleteItemFromCart API call response error! ${error.message}`);
    }
  }

  async function setProductQuantity(productId, quantity) {
    try {
      const cartObj = await postItemToCart(cartId, productId, quantity);
      setCart(cartObj.items);
    } catch (error) {
      console.error(`postItemToCart API call response error! ${error.message}`);
    }
  }

  // const [apiErrors, setApiErrors] = useState({});
  // const cartError = apiErrors.cart;
  // const errorKey = Object.keys(apiErrors).find((key) => apiErrors[key] != null);
  // const setProductListError = useCallback(
  //   (error) => setApiErrors((errors) => ({ ...errors, productList: error })),
  //   []
  // );
  // const setProductError = useCallback(
  //   (error) => setApiErrors((errors) => ({ ...errors, product: error })),
  //   []
  // );
  // const setCartError = useCallback(
  //   (error) => setApiErrors((errors) => ({ ...errors, cart: error })),
  //   []
  // );
 
  const [isLoading, setLoading] = useState(false);
  // const [retry, setRetry] = useState(false);

  // Initial cart fetch from API
  useEffect(() => {
    const cartIdFromLocalStorage = localStorage.getItem("edgemony-cart-id");
    // We fetch only of we have a Cart ID available
    if (!cartIdFromLocalStorage) {
      return;
    }

    setLoading(true);
    // setCartError(undefined);

    fetch(`https://fakestoreapi.com/carts/${cartIdFromLocalStorage}`)
      .then(response => response.json())
      .then((cartObj) => {
          setLoading(false);
          setCart(cartObj.items);
          cartId = cartObj.id;
      })
      .catch(({ message }) => {
          setLoading(false);
          // setCartError({ message, retry: () => setRetry(!retry) });
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); //<- retry, setCartError
  ///----------------------///


  // //function adding each product to the cart thanks to prdoduct id
  // function addToCart(productId){  
  //   setCart([...cart, { id: productId, quantity: 1}]); 
  // // to access to the cart and to build a new array by adding a new object 
  // //to render the new product template
  // }
  
  // //function removing each product by comparing its id and the id product 
  // //selected by the user
  // function removeFromCart(productId) {
  //   setCart(cart.filter((product) => product.id !== productId));
  //   // to filter the cart and to render for each product after have verified 
  //   //whether there is a match or not. If there isn't a matching, remove the product selcted 
  // }
  
  // //to set the quantity
  // function setProductQuantity(productId, quantity) {
  //   setCart(
  //     cart.map((product) =>
  //       product.id === productId ? { ...product, quantity } : product
  //     )
  //   );
  // }


  return (
    <Router>
      <div className="App">
        <Header
          logo ={data.logo}
          cart = {cart}
          showCart={!isLoading} //<- && !cartError
        />

        <Switch>

          <Route path = "/checkout">
            <Checkout  
              cartId = {cartId}
              setCart = {setCart}
            />
          </Route>
          
          <Route path = "/product/:id">
            <Product
              addToCart ={addToCart}
            />
          </Route>

          <Route path = "/cart">
              <Cart
                cart ={cart}
                removeFromCart = {removeFromCart} // function as props in modalCart
                setProductQuantity = {setProductQuantity}
                isLoading={isLoading}
              />  
          </Route>

          <Route exact path = "/">
            <Home
              data = {data}
              cache = {cache}
              // onError = {setProductListError}
            />
          </Route>
          
          <Route path = "*">
            <Page404/>
          </Route>

        </Switch>

        {/* {errorKey ? (
          <ErrorBanner
            message={apiErrors[errorKey].message}
            close={() => setApiErrors({ ...apiErrors, [errorKey]: undefined })}
            retry={apiErrors[errorKey].retry}
          />
        ) : null} */}

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
