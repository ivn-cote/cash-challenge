import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { turnCashInput, clearCash } from '../Cash/cashActions';
import { startInteractive } from '../Hardware/hardwareActions';

import styles from './customCash.scss';

class CustomCash extends PureComponent {
  componentWillMount() {
    this.props.onStart();
  }

  componentWillUnmount() {
    this.props.onLeave();
  }

  render() {
    const { customAmount } = this.props;
    return (
      <div className={styles.customCash}>
        <Helmet title="Type the amount" />
        <h2>Please type the amount using keyboard below</h2>
        <p>Press OK then</p>
        <input value={customAmount} autoFocus disabled />
      </div>
    );
  }
}

CustomCash.propTypes = {
  customAmount: PropTypes.string.isRequired,
  onStart: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
};

const connector = connect(
  ({ cash: { customAmount } }) => ({ customAmount }),
  dispatch => ({
    onStart: () => {
      dispatch(clearCash());
      dispatch(turnCashInput(true));
      dispatch(startInteractive());
    },
    onLeave: () => dispatch(turnCashInput(false)),
  }),
);

export default connector(CustomCash);
