import './Header.css';
import CartHeader from "./CartHeader";

function Header(props){
    return (
        <header className="App-header">
            <img src={props.logo} className="App-logo" alt="logo" /> 
            <CartHeader
             cart = {props.cart}
             products ={props.products}
             setModalSidebar = {props.setModalSidebar}/>
        </header>
    );
}
export default Header;