import Hero from '../components/Hero';
import Search from '../components/Search';
import ContainerCard from "../components/ContainerCard";
import Category from '../components/Category';


//Tools from react
import {useState, useEffect} from 'react';
import { useHistory, useLocation } from 'react-router';

 

function Home({data, products, setProducts, cache}){
    
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [retry, setRetry] = useState(false);


    useEffect(() => {

        // cache condition (if there is a cache, do nothing)
        if('products' in cache) {
            return;
        }

        setLoading(true);
        setError(false);

        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then((products) => {
            setProducts(products);
            setLoading(false);
            cache.products = products; //cache store
        })
        .catch(() => {
            setLoading(false);
            setError(true);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [retry]);

    // search bar and filter categories

    //LOCATION
    const location = useLocation(); //sort of state
    const history = useHistory();

    const searchParams = new URLSearchParams(location.search);

    let searchTerm = searchParams.get('q');
    if (searchTerm === null) {
        searchTerm = '';
    }

    function upedateSearchTerm(term){
        if (term === ''){
            searchParams.delete("q");
        }   else {
            searchParams.set('q', term); // set method to set q having term as value
        }
        history.push({search:"?"+ searchParams.toString()}); //update my query 
    }


    const categoriesParams = searchParams.get("categories"); //get params from Url (string)
    const category = categoriesParams ? categoriesParams.split(",") : [] ; // transform string in an array of string
    

    function updateCategories(categories){

        // const newParams = new URLSearchParams(location.search); // get URL params and put them in an object
        const selectedParams = categories.join(",");
        if (categories.length === 0){
            searchParams.delete("categories");
        }   else {
            searchParams.set('categories', selectedParams) // set method to set categories having selectedParams as value
        }
        history.push({search:"?"+ searchParams.toString()}); //update my query string 
    }
    


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
                    onSearchTerm = {upedateSearchTerm} 
                />
                <Category
                    category = {category}
                    cache = {cache}
                    onSelectedCategory = {updateCategories} //get function
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