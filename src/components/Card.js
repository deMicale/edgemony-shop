import './Card.css';

function Card(props){

    return(
        <div className ='App-Card'>
            <div className ='Img-card'>
                <img src={props.product.image} alt ='product' className='imgEl'/>
            </div>
            <div className ='Text-card'>
                <h1 className ='titleEl'>{props.product.title}</h1>
                <p className='priceEl'>€{props.product.price}</p>
                <button className="view" onClick={() => {
                    // document.body.style.position = 'fixed';
                    document.body.style.overflow= 'hidden';
                    props.setModalIsOpen(true);
                    props.setProductInModal(props.product);
                    }}>View more details</button>   
            </div>
        </div>
        )
};
export default Card;