import './ModalSidebar.css';

function ModalSidebar(props){

    return(
        <div className="modalCart">
            <div className="overlayCart" onClick={() => {
                props.setModalSidebar(false);
                document.body.style.overflow = 'scroll';
                }}></div>
            <div className="modalContentCart">
                <div className="modalProductCart">
                    <header className="titleCart">
                        <h2 className ="titleModal">Cart</h2>
                        <button type="button" className="btnCloseCart" onClick={() => {
                            props.setModalSidebar(false);
                            document.body.style.overflow = 'scroll';
                            }}>X</button>
                    </header>

                    <div className ="modalSidebarChildren">{props.children}</div>
                    
                </div>
            </div>
        </div>);
}
export default ModalSidebar;