import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList = () => {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            <h5>{stream.title}</h5>
            <div className="description">
              <p>{ stream.description }</p>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{ this.renderList() }</div>
      </div>
    ) 
  }
}

const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams) }; //Object.values devuelve array de elementos corresponden a las propiedades enumerables de dicho objeto
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
