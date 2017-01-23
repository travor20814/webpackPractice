import React, {
  Component,
  PropTypes as T,
} from 'react';
import { StyleRoot } from 'radium';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const styles = {
  wrapper: {

  },
  board: {

  },
  container: {

  },
};

class MainBoard extends Component {
  render() {
    const {
      children,
    } = this.props;

    return (
      <StyleRoot style={styles.wrapper}>
        <div style={styles.board}>
          <main style={styles.container}>
            {children}
          </main>
        </div>
      </StyleRoot>
    );
  }
}

MainBoard.PropTypes = {

};

export default connect(
  state => ({

  }),
  dispatch => bindActionCreators({

  }, dispatch),
)(MainBoard);
