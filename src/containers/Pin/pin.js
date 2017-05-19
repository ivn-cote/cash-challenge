import React from 'react';
import Helmet from 'react-helmet';
import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import styles from './pin.scss';

const Pin = ({ pinCode, status, errors }) => (
  <div className={styles.pin}>
    <Helmet title="PIN requested" />

    <p>Please enter your PIN</p>
    {
      !_isEmpty(errors)
        && _map(errors, (key, val) => <div key={key} className={styles.error}>{val}</div>)
    }
    PINCODE: {pinCode.join(' ')}
    {
      status === 'pending'
        && <div className={styles.wait} />
    }
  </div>
);

Pin.propTypes = {
  pinCode: PropTypes.arrayOf(PropTypes.string).isRequired,
  status: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
};

const connector = connect(
  ({ pin }) => ({ ...pin }),
);

export default connector(Pin);
