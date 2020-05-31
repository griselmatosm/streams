import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream} from '../../actions';

class StreamCreate extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }

  }

  //renderInput recibe como props un objeto con las propiedades: input, meta y label, un objeto por cada campo (Field)
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input type="text" {...input} autoComplete="off" /> {/*guarda el value y captura el evento, sustituye el onChange y el value */}
        {this.renderError(meta)}
      </div>
    );
  }


  onSubmit = (formValues) => {
    //guarda como props los valores de los campos (Field) del formulario (formValues)
    //formValues es un objeto que se conforma como clave con el name del Field del form
    //y como valor, el value del input correspondiente
    this.props.createStream(formValues)
  }

  render() {
    //en this.props se guardan una cantidad de propiedades entre ellas el método handleSubmit que es provisto por redux-form
    //este método será el encargado de recuperar los valores de los campos del fomulario
    //handleSubmit recibirá como parámetro el método onSubmit que se ha preparado para el envío del formulario
    //en forma de objeto para almecenar en la DB a través del método POST
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}> 
        <Field name="title" component={this.renderInput} label="Enter title" /> {/*name y component son props requeridas*/}
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
const formWrapped = reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped)
