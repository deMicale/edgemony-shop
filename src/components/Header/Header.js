import './Header.css';
import Cart from "./Cart";

function Header(props){
    return (
        <header className="App-header">
            <img src={props.logo} className="App-logo" alt="logo" /> 
            <Cart
             cart = {props.cart}
             products ={props.products}
             setModalCart = {props.setModalCart}/>
        </header>
    );
}
export default Header;