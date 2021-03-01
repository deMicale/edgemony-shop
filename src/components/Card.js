import './Card.css';

function Card(props){
    return(
        <div className ='App-Card'>
            <div className ='Img-card'>
                <img src={props.product.image}/>
            </div>
            <div className ='Text-card'>
                <h1>{props.product.title}</h1>
                <p>{props.product.price}</p>
                <button>View more details</button>
            </div>
        </div>
        )
};
export default Card;