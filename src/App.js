import "./App.css";
import Header from './components/Header';
// import Body from './Components/Body';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Card from './components/Card';

const fakeProducts = require("./mocks/data/products.json");

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  products: fakeProducts,
};

function App() {
  return <div className="App">
    <Header
      logo ={data.logo}
      // title = {data.title}
      />
    <Hero
      cover = {data.cover}
      title = {data.title}
      description = {data.description}
    />
    <div className='card-container'>
       {data.products.map(product => {
       return <Card product = {product} key = {product.id} />})}
    </div>
    <Footer/>
  </div>;
}

export default App;