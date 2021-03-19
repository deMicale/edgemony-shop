import './Cart.css';

import {Link} from 'react-router-dom';

function Cart(props){
    const totalPrice = props.cart.reduce((acc, cartItem) =>{
        return acc + (cartItem.price*cartItem.quantity)
    },0).toFixed(2);

    return(
        <div className="cart">
            {props.cart.map((cartItem) => {
                return (
                    <main className="productsInCart" key={cartItem.id}>
                        <div className="imgProductWrapper">
                            <img src={cartItem.image} className="imgProduct" alt={cartItem.title}/>                            
                        </div>
                        <div className="contentProductWrapper">
                            <h3 className="nameProduct">{cartItem.title}</h3>
                            <span className="qtyProduct"> 
                                <p>Quantity:</p>

                                <button className="minusProduct" onClick = {
                                    () => props.setProductQuantity(cartItem.id, cartItem.quantity-1) 
                                    } disabled={cartItem.quantity === 1}>-</button> 

                                <p>{cartItem.quantity}</p>

                                <button className="plusProduct" onClick = {
                                    () => props.setProductQuantity(cartItem.id, cartItem.quantity+1)
                                    }>+</button>

                            </span>
                            <span className="priceProduct">€ {cartItem.price}</span>
                            <button className="btnRemove" onClick= {() => props.removeFromCart(cartItem.id)}>Remove</button>
                        </div>
                    </main>
                );
            })}
            <footer className="footerCart">
                <p className="totalCart">Total price : € {totalPrice}</p>
                <Link to = "/checkout">
                    <button className= "btnCheckout">Go to checkout!</button>
                </Link>
            </footer>
        </div>
    );
}
export default Cart;