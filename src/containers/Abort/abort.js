import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { toggleAbort } from '../Hardware/hardwareActions';

import styles from './abort.scss';

class Abort extends PureComponent {
  componentWillMount() {
    this.props.toggleAbortMode(true);
  }
  componentWillUnmount() {
    this.props.toggleAbortMode(false);
  }
  render() {
    return (
      <div className={styles.abort}>
        <Helmet title="Abort operations" />

        <h2>Are you sure you want to cancel current process?</h2>
        <p>Press Cancel again to get your card back.
          Otherwise, press OK button to return to the previous screen.</p>
      </div>
    );
  }
}

Abort.propTypes = {
  toggleAbortMode: PropTypes.func.isRequired,
};

const connector = connect(
  () => ({}),
  dispatch => ({
    toggleAbortMode: mode => dispatch(toggleAbort(mode)),
  }),
);


export default connector(Abort);
