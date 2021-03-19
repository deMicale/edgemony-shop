import './Header.css';
import CartHeader from "./CartHeader";
import { Link } from "react-router-dom";


function Header(props){
    return (
        <header className="App-header">
            <Link to='/'><img src={props.logo} className="App-logo" alt="logo" /></Link>
            {props.showCart && <CartHeader
             cart = {props.cart}
             products ={props.products}/>}
        </header>
    );
}
export default Header;