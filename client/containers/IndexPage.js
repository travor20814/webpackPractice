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

class IndexPage extends Component {
  render() {
    return (
      <div style={styles.wrapper}>
        hello world!
      </div>
    );
  }
}

IndexPage.PropTypes = {

};

export default connect(
  state => ({

  }),
  dispatch => bindActionCreators({

  }, dispatch),
)(radium(IndexPage));
