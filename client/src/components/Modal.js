import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" onClick={() => history.push('/')}>
      <div className="ui standard modal visible active" onClick={(ev) => ev.stopPropagation()}>
        <div className="header">{props.title}</div>
        <div className="content">{props.description}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
