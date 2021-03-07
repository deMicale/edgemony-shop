import Card from './Card';
import Error from './Error';
import Loader from './Loader';
import './ContainerCard.css';


function ContainerCard(props){

    let empty = true;

    return(
        <div className='card-container'>
            {empty = true}
            {!props.isLoading ? (props.products.map(product => {
                if((product.title.toLowerCase().includes(props.searchTerm.toLowerCase())
                    || product.description.toLowerCase().includes(props.searchTerm.toLowerCase()))
                    && (props.category.includes(product.category) || props.category.length === 0)) {
                    empty = false;
                    return <Card product = {product} key = {product.id} />
                } 
                return null;
                } //end arrow 
                ) // end map 
            ) // first condition ternary operator
            : (<Loader/>)
            }
            {empty && <div> <p>Your research returned no results</p></div>}
            {props.error&&<Error
                setRetry={props.setRetry} 
                retry = {props.retry} 
                setError = {props.setError}/>}

        </div>
    );
}
export default ContainerCard;