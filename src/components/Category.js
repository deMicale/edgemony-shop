import './Category.css';
import Loader from './Loader';
import {useState, useEffect} from 'react';

function Category (props) {
    
    const [categories, setCategories] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);

        fetch('https://fakestoreapi.com/products/categories')
          .then(response => response.json())
          .then((categories) => {
              setCategories(categories);
              setLoading(false);
          })
          .catch(() => {
              setLoading(false);
          });
      }, []);

    return(
        <div className ="categoryBox">
            <h2 className ="categories-name">Categories</h2>
            <div className="categories-elem">
                {!isLoading ? (categories.map((category)=> {
                    return (
                        <div className="categoryFilter" key={category}>
                            <input className ="inputFilter" onClick={()=> {
                                let cat = props.category.slice();
                                if (cat.includes(category)) {
                                    const index = props.category.indexOf(category)
                                    cat.splice(index, 1)
                                } else {
                                    cat.push(category)
                                }
                                props.setCategory(cat);
                            }} type='checkbox' id={category}/>
                            <label htmlFor={category}>{category}</label>
                        </div>);
                }))
                : (<Loader/>)}  
            </div>
        </div>
    )
}
export default Category;