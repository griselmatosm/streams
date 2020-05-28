import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    return (
      <div className="field"> 
         <label>{label}</label> 
         <input type="text" {...input} /> {/*guarda el value y captura el evento */}
      </div>
    );
  }

  render() {
    return (
      <form className="ui form">
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field name="description" component={this.renderInput} label="Enter description" />
      </form>
    );
  }
}

export default reduxForm({
  //reduxForm recibe un  solo objeto, con una clave form y valor un string que indique el propósito del formulario
  form: 'streamCreate',
})(StreamCreate);
