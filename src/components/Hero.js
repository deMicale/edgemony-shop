import './Hero.css';

function Hero(props){
    return (
        <div className='App-hero'>
            <div className='text-wrapper'>
                <h1 className ='titleHero'>{props.title}</h1>
                <h2 className='descriptionHero'>{props.description}</h2>
            </div>
            <img src={props.cover} className='App-cover' alt='Hero cover'/>
        </div>)
};
export default Hero;