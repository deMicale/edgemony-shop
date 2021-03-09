import './ModalCart.css';

function ModalCart(props){
    return(
        <div className="modalCart">
            <div className="overlayCart" onClick={() => {
                props.setModalCart(false);
                document.body.style.overflow = 'scroll';
                }}></div>
            <div className="modalContentCart">
                <div className="modalProductCart">
                    <header className="titleCart">
                        <h2 className ="titleModal">Cart</h2>
                        <button type="button" className="btnCloseCart" onClick={() => {
                            props.setModalCart(false);
                            document.body.style.overflow = 'scroll';
                            }}>X</button>
                    </header>
                    {props.cart.map((cartItem) => {
                        const product = props.products.find(product => product.id === cartItem.id)
                        return (
                            <main className="productsInCart" key={product.id}>
                                <div className="imgProductWrapper">
                                    <img src={product.image} className="imgProduct" alt={product.title}/>                            
                                </div>
                                <div className="contentProductWrapper">
                                    <h3 className="nameProduct">{product.title}</h3>
                                    <span className="qtyProduct"> Quantity: {cartItem.quantity}</span>
                                    <span className="priceProduct">€ {product.price}</span>
                                    <button className="btnRemove">Remove</button>
                                </div>
                            </main>
                        );
                    })}
                    <footer className="footerCart">
                        <p className="totalCart">Total price : € {props.totalPrice}</p>
                    </footer>
                </div>
            </div>
        </div>);
}
export default ModalCart;