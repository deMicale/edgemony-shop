import './Cart.css';

function Cart(props){
    const totalPrice = props.cart.reduce((acc, cartItem) =>{
        const product = props.products.find(product => product.id === cartItem.id)
        return acc + (product.price*cartItem.quantity)
    },0).toFixed(2);

    return(
        <div className="cart">
            {props.cart.map((cartItem) => {
                const product = props.products.find(product => product.id === cartItem.id)
                return (
                    <main className="productsInCart" key={product.id}>
                        <div className="imgProductWrapper">
                            <img src={product.image} className="imgProduct" alt={product.title}/>                            
                        </div>
                        <div className="contentProductWrapper">
                            <h3 className="nameProduct">{product.title}</h3>
                            <span className="qtyProduct"> 
                                <p>Quantity:</p>

                                <button className="minusProduct" onClick = {
                                    () => props.setProductQuantity(product.id, cartItem.quantity-1) 
                                    } disabled={cartItem.quantity === 1}>-</button> 

                                <p>{cartItem.quantity}</p>

                                <button className="plusProduct" onClick = {
                                    () => props.setProductQuantity(product.id, cartItem.quantity+1)
                                    }>+</button>

                            </span>
                            <span className="priceProduct">€ {product.price}</span>
                            <button className="btnRemove" onClick= {() => props.removeFromCart(product.id)}>Remove</button>
                        </div>
                    </main>
                );
            })}
            <footer className="footerCart">
                <p className="totalCart">Total price : € {totalPrice}</p>
            </footer>
        </div>
    );
}
export default Cart;