import './Error.css';

function Error(props){
    return (
        <div className="errorBox">
            <h2 className="errorText">Sorry, something went wrong!</h2>
            <div className = 'btnBanner'>
                <button className ='btnRetry' type = 'button' 
                    onClick = {() => props.setRetry(!props.retry)}>Retry</button>
                <button className = 'btnX' type = 'button'
                    onClick = {() => props.setError(false)} >X</button>
            </div>
        </div>
    )
}

export default Error;