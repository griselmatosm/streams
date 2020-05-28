import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput({ input, label, meta }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input type="text" {...input} /> {/*guarda el value y captura el evento */}
        <div>{meta.error}</div>
      </div>
    );
  }

  onSubmit(formValues) {
    //guarda como props los valores de los campos del formulario
    console.log(formValues);
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field name="description" component={this.renderInput} label="Enter description" />
        <button className="ui button primary">Create</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

//reduxForm recibe un solo objeto, con una clave form y valor un string que indique el propósito del formulario
export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);
