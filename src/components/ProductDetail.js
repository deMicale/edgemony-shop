import './ProductDetail.css';
import {useState} from "react";

function ProductDetail(props){

    const [buttonText, setButtonText] = useState("Add to cart");
    // const changeText = (text) => setButtonText(text);

    return(

        <div className ='modalCard'>
            <div className ='Img-card'>
                <img src={props.product.image} alt ='product' className='imgEl'/>
            </div>
            <div className ='Text-card'>
                <h1 className ='titleEl'>{props.product.title}</h1>
                <p className='descriptionEl'>{props.product.description}</p>
                <p className='priceEl'>€{props.product.price} </p>
                <button className ="btnAddToCart" onClick={() => { 
                    if(buttonText!=="In cart"){
                        setButtonText("In cart");
                        props.addToCart(props.product.id); // get addToCart function from App
                    }
                    }}>{buttonText}</button> 
            </div>
        </div>
    );
}

export default ProductDetail;