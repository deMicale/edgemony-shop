import "./App.css";
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Search from './components/Search';
import ContainerCard from "./components/ContainerCard";
import Category from './components/Category';
import Modal from "./components/Modal";
import ModalSidebar from './components/ModalSidebar';

import { useState, useEffect } from "react";
import Cart from "./components/Cart";


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
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [retry, setRetry] = useState(false);

  useEffect(() => {

    setLoading(true);
    setError(false);

    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then((products) => {
        setProducts(products);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [retry]);

  // search bar and filter categories
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState([]);

  //cart
  const [cart, setCart] = useState([]);

  //modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [productInModal, setProductInModal] = useState({});

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



  return (<div className="App">
    <Header
      logo ={data.logo}
      // title = {data.title}
      cart = {cart}
      products = {products}
      setModalSidebar = {setModalSidebar}
      />
    <Hero
      cover = {data.cover}
      title = {data.title}
      description = {data.description}
    />
    <div className="app-filter-box">
      <Search 
        searchTerm = {searchTerm}
        setSearchTerm = {setSearchTerm}
      />
      <Category
        category = {category}
        setCategory={setCategory}
      />
    </div>
    <ContainerCard
      products = {products}
      isLoading = {isLoading}
      error = {error}
      setRetry ={setRetry}
      searchTerm = {searchTerm}
      retry = {retry}
      setError = {setError}
      category = {category}
      setModalIsOpen = {setModalIsOpen}
      setProductInModal = {setProductInModal}
    />
    {modalSidebar && <ModalSidebar setModalSidebar={setModalSidebar}>
        <Cart
          cart ={cart}
          products = {products}
          removeFromCart = {removeFromCart} // function as props in modalCart
          setProductQuantity = {setProductQuantity}
          />  
      </ModalSidebar>}
    {modalIsOpen && <Modal 
      product={productInModal}
      isOpen={setModalIsOpen}
      addToCart = {addToCart} // to get addToCart function as props in Modal
      // cart = {cart}        // 
      // setCart = {setCart}
    />}

    <Footer/>
  </div>);
}

export default App;
