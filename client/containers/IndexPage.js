import React, {
  Component,
  PropTypes as T,
} from 'react';
import radium from 'radium';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Shimmer from 'skeleton-placeholder-react';

const styles = {
  wrapper: {
    width: '100%',
    height: 240,
    fontSize: 30,
  },
};

class IndexPage extends Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <Shimmer
          type="listArticleWithPhoto"
          height={120}
          backgroundColor="#fff" />
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
