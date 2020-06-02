import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">I am a modal</div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;