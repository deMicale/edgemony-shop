import './Modal.css'
import React, { useState } from "react";

function Modal(props) {

    const [buttonText, setButtonText] = useState("Add to cart");
    // const changeText = (text) => setButtonText(text);

    

    return (
        <div className="modal">
            <div className="overlay" onClick={() => {
                props.isOpen(false)
                document.body.style.overflow = 'scroll';
            }}></div>
            <div className='modalContent'>
                <div className='modalBtn'>
                    <button className ="btnClose" onClick={() => {props.isOpen(false)
                    document.body.style.overflow = 'scroll'}}>X</button>
                </div>
                <div className ='modalCard'>
                    <div className ='Img-card'>
                        <img src={props.product.image} alt ='product' className='imgEl'/>
                    </div>
                    <div className ='Text-card'>
                        <h1 className ='titleEl'>{props.product.title}</h1>
                        <p className='descriptionEl'>{props.product.description}</p>
                        <p className='priceEl'>€{props.product.price} </p>
                        <button className ="btnAddToCart" onClick={() => {
                            setButtonText("In cart");
                            // const cartCopied = props.cart.slice(); //copy of array
                            // cartCopied.push(props.product.price) //add each price to cart array

                            props.setCart([...props.cart, props.product.price]); //modify local copy of cart array to update also cart
                            
                            // console.log(props.cart)
                            }}>{buttonText}</button> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;

