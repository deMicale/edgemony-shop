import './Card.css';
import React, { useState } from 'react';
import Modal from './Modal';

function Card(props){

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return(
        <div className ='App-Card'>

            {modalIsOpen && <Modal 
                product={props.product} 
                isOpen={setModalIsOpen}
            />}
            
            <div className ='Img-card'>
                <img src={props.product.image} alt ='product' className='imgEl'/>
            </div>
            <div className ='Text-card'>
                <h1 className ='titleEl'>{props.product.title}</h1>
                <p className='priceEl'>€{props.product.price}</p>
                <button onClick={() => {
                    // document.body.style.position = 'fixed';
                    document.body.style.overflow= 'hidden';
                    setModalIsOpen(true)}}>View more details</button>
            </div>
        </div>
        )
};
export default Card;