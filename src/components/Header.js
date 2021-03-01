import './Header.css';

function Header(props){
    return (
        <header className="App-header">
            <img src={props.logo} className="App-logo" alt="logo" /> 
            {/* <span>{props.title}</span>  */}
        </header>
    );
}
export default Header;