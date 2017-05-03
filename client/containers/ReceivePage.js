import React, {
  Component,
  PropTypes as T,
} from 'react';
import radium from 'radium';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const styles = {
  wrapper: {
    fontSize: 30,
  },
};

class ReceivePage extends Component {
  render() {
    const {
      params,
    } = this.props;
    console.log(params);
    return (
      <div style={styles.wrapper}>
        hello world!
      </div>
    );
  }
}

ReceivePage.PropTypes = {

};

export default connect(
  state => ({

  }),
  dispatch => bindActionCreators({

  }, dispatch),
)(radium(ReceivePage));
