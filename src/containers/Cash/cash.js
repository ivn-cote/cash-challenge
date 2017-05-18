import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Options from 'components/Options';
import { selectCashOption } from './cashActions';

import styles from './cash.scss';

const cashOptions = [
  10,
  20,
  50,
  100,
  150,
  300,
].map(x => ({ title: `${x} €`, data: x }));

const Cash = ({ amount, onOptionSelected }) => (
  <div className={styles.cash}>
    {
      amount
        ? <h2>You have selected to withdrawal {amount} €, press OK to continue</h2>
        : <p>Please select amount of withdrawal</p>
    }
    <Options options={cashOptions} chooseHandler={onOptionSelected} />
  </div>
);

Cash.propTypes = {
  amount: PropTypes.number.isRequired,
  onOptionSelected: PropTypes.func.isRequired,
};

const connector = connect(
  ({ cash }) => ({ ...cash }),
  dispatch => ({
    onOptionSelected: amount => dispatch(selectCashOption(amount)),
  }),
);

export default connector(Cash);
