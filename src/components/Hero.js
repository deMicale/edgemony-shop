import './Hero.css';

function Hero(props){
    return (
        <div className='App-hero'>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
            <img src={props.cover} className='App-cover'/>
        </div>)
};
export default Hero;