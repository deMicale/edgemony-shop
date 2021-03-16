import './Product.css';

import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";

import Loader from "../components/Loader";
import ProductDetail from '../components/ProductDetail';

function Product(props){
    let {id} = useParams();

    const [product, setProduct] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {

        setLoading(true);

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then ((product) => {
                console.log(product)
               setProduct(product)
               setLoading(false);

            }) 
            .catch(() => {
                setLoading(false);
            });

        }, [id]);

    return(
        <div className="product">
            { !isLoading ? (<ProductDetail
            product = {product}
            addToCart = {props.addToCart}/>) 
            : (<Loader/>)}
        </div>
    )
}
export default Product;