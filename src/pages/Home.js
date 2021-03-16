import Hero from '../components/Hero';
import Search from '../components/Search';
import ContainerCard from "../components/ContainerCard";
import Category from '../components/Category';

import {useState, useEffect} from 'react';

function Home({data, products, setProducts}){
    
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [retry, setRetry] = useState(false);

    useEffect(() => {

        setLoading(true);
        setError(false);

        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then((products) => {
            setProducts(products);
            setLoading(false);
        })
        .catch(() => {
            setLoading(false);
            setError(true);
        });
    }, [retry]);

    // search bar and filter categories
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState([]);

    return(
        <div className = "home">
            <Hero
                cover = {data.cover}
                title = {data.title}
                description = {data.description}
            />
            <div className="app-filter-box">
                <Search 
                    searchTerm = {searchTerm}
                    setSearchTerm = {setSearchTerm}
                />
                <Category
                    category = {category}
                    setCategory={setCategory}
                />
            </div>
            <ContainerCard
                products = {products}
                isLoading = {isLoading}
                error = {error}
                setRetry ={setRetry}
                searchTerm = {searchTerm}
                retry = {retry}
                setError = {setError}
                category = {category}
            />
        </div>
    );
}

export default Home;           