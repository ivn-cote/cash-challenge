import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import styles from './cash.scss';

const Cash = ({ amount }) => (
  <div className={styles.cash}>
    {
      amount
        ? <p>Selected amount {amount}</p>
        : <p>Please select amount of withdrawal</p>
    }
  </div>
);

Cash.propTypes = {
  amount: PropTypes.number.isRequired,
};

const connector = connect(
  ({ cash }) => ({ ...cash }),
);

export default connector(Cash);
