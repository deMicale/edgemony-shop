import './Cart.css';

function Cart(props){
    const totalPrice = props.cart.reduce((acc, cartItem) =>{
        const product = props.products.find(product => product.id === cartItem.id)
        return acc + (product.price*cartItem.quantity)
    },0).toFixed(2)
    
    return (
        <div className="cart">
            <div className = "wrapperIconCart" onClick={() => {
                props.setModalCart(true);
                document.body.style.overflow = 'hidden';
            }}>
                <img src={process.env.PUBLIC_URL + 'shopping-cart.png'} 
                    alt="cart-logo"
                    className="iconCart"/>
                <p className="numCart">{props.cart.length}</p>
            </div>
            <p className="priceCart">€{totalPrice}</p>
            
        </div>
    )
}
export default Cart;

