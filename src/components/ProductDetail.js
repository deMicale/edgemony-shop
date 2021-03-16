import './ProductDetail.css';
import {useState} from "react";

function ProductDetail(props){

    const [buttonText, setButtonText] = useState("Add to cart");
    // const changeText = (text) => setButtonText(text);

    return(

        <div className ='productDetail'>
            <div className ='product-image'>
                <img src={props.product.image} alt ='product' className='imgEl'/>
            </div>
            <div className ='product-text'>
                <h1 className ='product-title'>{props.product.title}</h1>
                <p className='product-description'>{props.product.description}</p>
                <p className='product-price'>€{props.product.price} </p>
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