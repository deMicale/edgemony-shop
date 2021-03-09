import "./App.css";
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Search from './components/Search';
import ContainerCard from "./components/ContainerCard";
import Category from './components/Category';
import Modal from "./components/Modal";

import { useState, useEffect } from "react";


// const fakeProducts = require("./mocks/data/products.json");

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  // products: fakeProducts,
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


  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState([]);

  //cart
  const [cart, setCart] = useState([]);

  //modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [productInModal, setProductInModal] = useState({});


  return (<div className="App">
    <Header
      logo ={data.logo}
      // title = {data.title}
      cart = {cart}
      products = {products}
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

    {modalIsOpen && <Modal 
      product={productInModal}
      isOpen={setModalIsOpen}
      cart = {cart}
      setCart = {setCart}
    />}

    <Footer/>
  </div>);
}

export default App;
