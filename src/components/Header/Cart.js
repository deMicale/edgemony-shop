import './Cart.css'
function Cart(props){
    let total = 0;
    props.cart.forEach((price)=> total += price);

    return (
        <div className="cart">
            <div className = "wrapperIconCart">
                <img src={process.env.PUBLIC_URL + 'shopping-cart.png'} 
                    alt="cart-logo"
                    className="iconCart"/>
                <p className="numCart">{props.cart.length}</p>
            </div>
            <p className="priceCart">€{total}</p>
        </div>
    )
}
export default Cart;

