import './Modal.css'


function Modal(props) {
    return (
        <div className="modal">
            <div className="overlay" onClick={() => {
                props.isOpen(false)
                document.body.style.overflow = 'scroll';
            }}></div>
            <div className='modalContent'>
                <div className='modalBtn'>
                    <button className ="btnClose" onClick={() => {
                        props.isOpen(false)
                        document.body.style.overflow = 'scroll'
                        }}>X</button>
                </div>
                <div className="modalChildren">{props.children}</div> 
            </div>
        </div>
    );
}

export default Modal;

