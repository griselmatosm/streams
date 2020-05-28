import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {

  renderInput({ input }) {
    return <input type="text" {...input}/> //guarda el value y captura el evento
  }

  render() {
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} /> 
      </form>
    )
  }
}

export default reduxForm({ //reduxForm recibe un  solo objeto, con una clave form y valor un string que indique el propósito del formulario
  form: 'streamCreate'
})(StreamCreate);
