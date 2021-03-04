import './Search.css';

function Search(props){
    return(
        <div className ='searchBar'>
            <h2>Search for...</h2>
            <form>
                <input
                    className='inputData'
                    type="text"
                    placeholder="Search"
                    value ={props.searchTerm}
                    onChange ={(evt) => {
                        props.setSearchTerm(evt.target.value)
                    }}
                />
            </form>
        </div>
    )
}
export default Search;