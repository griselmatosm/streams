import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues)
  };

  render() {
    if (this.props.stream) {
      const { title, description } = this.props.stream;
      return (
        <div>
          <h3>Edit a Stream</h3>
          <StreamForm 
            initialValues={{ title: title, description: description }} 
            onSubmit={this.onSubmit} 
          /> {/* initialValues es una prop especial de redux-form, doble llave porque una indica q se va a interpolar js dentro de jsx y la otra que es un objeto */}
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
