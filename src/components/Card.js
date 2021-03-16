import './Card.css';

import {Link} from "react-router-dom";

function Card(props){

    return(
        <div className ='App-Card'>
            <div className ='Img-card'>
                <img src={props.product.image} alt ='product' className='imgEl'/>
            </div>
            <div className ='Text-card'>
                <h1 className ='titleEl'>{props.product.title}</h1>
                <p className='priceEl'>€{props.product.price}</p>

                <Link to = {`/product/${props.product.id}`}>
                    <button className="view">View more details</button>
                </Link>
                
            </div>
        </div>
        )
};
export default Card;