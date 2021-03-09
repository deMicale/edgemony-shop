import './Header.css';
import Cart from "./Cart";

function Header(props){
    return (
        <header className="App-header">
            <img src={props.logo} className="App-logo" alt="logo" /> 
            <Cart
             cart = {props.cart}
             products ={props.products}/>
        </header>
    );
}
export default Header;