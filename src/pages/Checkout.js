import './Checkout.css';
import {useState} from 'react';

function Checkout({cartId, setCart}){

    const [checkoutData, setCheckoutData] = useState({});

    async function updateCart(){
        console.log(checkoutData)
        const response = await fetch(`https://fakestoreapi.com/carts/${cartId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                billingData: checkoutData
            })
        })
        const data = await response.json();
        console.log('fetch updateCart:', data)
    }

    async function createOrder(){
        const response = await fetch(`https://fakestoreapi.com/orders`, {
            method: 'POST',
            body: JSON.stringify({
                cartId: cartId
            })
        })
        const newOrder = await response.json();
        console.log(`nuovo ordine`, newOrder)
    }

    async function createCart(){
        const response = await fetch( `https://fakestoreapi.com/carts`,{
            method: 'POST'
        })
        const newCart = await response.json();
        setCart(newCart.items);
        console.log(`nuovo carrello`, newCart)
        localStorage.setItem('edgemony-cart-id', newCart.id)
        cartId = newCart.id;
    }

    return(
        <div>
            <form className ="formCheckout">
                <label className ="labelCheckout">
                    Name: <br/>
                    <input className="inputCheckout" type= "text" name = "name"
                        placeholder ="your name" onChange ={(evt) => {
                            setCheckoutData({...checkoutData, name : evt.target.value})
                        }}
                        required/>
                </label>  
                <label className ="labelCheckout">
                    Last name:<br/>
                    <input className="inputCheckout" type= "text" name = "lastname"
                        placeholder ="your last name" onChange ={(evt) => {
                            setCheckoutData({...checkoutData, lastName : evt.target.value})
                        }}
                        required/>
                </label> 
                <label className ="labelCheckout">
                    Address:<br/>
                    <input className="inputCheckout" type= "text" name = "address"
                        placeholder = "your address" onChange ={(evt) => {
                            setCheckoutData({...checkoutData, address : evt.target.value})
                        }}
                        required/>
                </label> 
                <label className ="labelCheckout">
                    Email:<br/>
                    <input className="inputCheckout" type= "text" name = "email"
                        placeholder = "your email" onChange ={(evt) => {
                            setCheckoutData({...checkoutData, email : evt.target.value})
                        }}
                        required/>
                </label> 
                <button className="btnCheckout"  type ="submit" onClick ={(evt) => {
                        evt.preventDefault();
                        if(('name' in checkoutData && checkoutData.name.length>1) &&
                            ('lastName' in checkoutData && checkoutData.lastName.length>1) &&
                            ('address' in checkoutData && checkoutData.address.length>1) &&
                            ('email' in checkoutData && checkoutData.email.length>1)) {
                                updateCart();
                                createOrder();
                                createCart();
                        }
                }}
                >Complete &gt;</button>
            </form>
        </div>
    )
}

export default Checkout;