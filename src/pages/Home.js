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
    console.log(cache)


    useEffect(() => {

        // cache condition (if there is a cache, do nothing)
        if(cache !== undefined) {
            return;
        }

        setLoading(true);
        setError(false);

        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then((products) => {
            setProducts(products);
            setLoading(false);
            cache = {products}; //cache store
        })
        .catch(() => {
            setLoading(false);
            setError(true);
        });
    }, [retry]);

    // search bar and filter categories
    const [searchTerm, setSearchTerm] = useState(""); 



    



    //LOCATION
    const location = useLocation();
    const history = useHistory();


    const categoriesParams = new URLSearchParams(location.search).get("categories"); //get params from Url (string)
    const category = categoriesParams?categoriesParams.split(",") : [] ; // transform string in an array of string
    

    function updateCategories(categories){

        const newParams = new URLSearchParams(location.search); // get URL params and put them in an object
        const selectedParams = categories.join(",");
        if (categories.lenght===0){
            location.delete("categories");
        }   else {
            newParams.set('categories', selectedParams) // set method to set categories having selectedParams as value
        }
        history.push({search:"?"+ newParams.toString()}); //update my query string 
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
                    setSearchTerm = {setSearchTerm}
                />
                <Category
                    category = {category}
                    // setCategory={setCategory}
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