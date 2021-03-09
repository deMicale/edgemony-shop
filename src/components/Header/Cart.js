import './Cart.css'
import ModalCart from './ModalCart';

import { useState } from "react";

function Cart(props){
    const totalPrice = props.cart.reduce((acc, cartItem) =>{
        const product = props.products.find(product => product.id === cartItem.id)
        return acc + product.price
    },0).toFixed(2)
    
    const [modalCart, setModalCart] = useState(false);
    
    return (
        <div className="cart">
            <div className = "wrapperIconCart" onClick={() => {
                setModalCart(true);
                document.body.style.overflow = 'hidden';
            }}>
                <img src={process.env.PUBLIC_URL + 'shopping-cart.png'} 
                    alt="cart-logo"
                    className="iconCart"/>
                <p className="numCart">{props.cart.length}</p>
            </div>
            <p className="priceCart">€{totalPrice}</p>
            {modalCart && <ModalCart
                modalCart={modalCart}
                setModalCart={setModalCart}
                totalPrice ={totalPrice}
                cart ={props.cart}
                products = {props.products}
                />}
        </div>
    )
}
export default Cart;

