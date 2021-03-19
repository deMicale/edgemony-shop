import './CartHeader.css';
import { Link } from "react-router-dom";

function CartHeader(props){
    const totalPrice = props.cart.reduce((acc, cartItem) =>{
        return acc + (cartItem.price*cartItem.quantity)
    },0).toFixed(2);

    const totalQuantity = props.cart.reduce((acc, cartItem) =>{
        return acc + (cartItem.quantity)
    },0);
    
    return (
        <div className="cartHeader">
            <Link to = "/cart">
                <div className = "wrapperIconCart">
                    <img src={process.env.PUBLIC_URL + '/shopping-cart.png'} 
                        alt="cart-logo"
                        className="iconCart"/>
                    <p className="numCart">{totalQuantity}</p>
                </div>
            </Link>
            <p className="priceCart">€{totalPrice}</p>
            
        </div>
    )
}
export default CartHeader;

