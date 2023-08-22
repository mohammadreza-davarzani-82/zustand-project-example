import PropTypes from "prop-types";
import "./Modal.css";
const Modal = ({ children, showModal , handleClose}) => {
  return (
    <>
      {showModal ? (
        <div className="Modal">
          <div className="modal-content">
            <header className="modal-header">
              <h2>Add Todo!</h2>
            </header>
            {children}
            <footer>
                <button className="modal-close-button" onClick={()=>handleClose(false)} >
                    Close
                </button>
            </footer>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.any,
  showModal: PropTypes.bool,
  handleClose: PropTypes.bool,

};
