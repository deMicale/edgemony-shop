import './Header.css';
import Cart from "./Cart";

function Header(props){
    return (
        <header className="App-header">
            <img src={props.logo} className="App-logo" alt="logo" /> 
            {/* <span>{props.title}</span>  */}
            <Cart
             cart = {props.cart}/>
        </header>
    );
}
export default Header;