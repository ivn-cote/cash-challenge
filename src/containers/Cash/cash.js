import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Options from 'components/Options';
import { selectCashOption, clearCash } from './cashActions';
import { startInteractive } from '../Hardware/hardwareActions';

import styles from './cash.scss';

const cashOptions = [
  10,
  20,
  50,
  100,
  150,
  300,
].map(x => ({ title: `${x} €`, data: x }));

class Cash extends PureComponent {
  componentWillUnmount() {
    console.log('Cash UMOUNT')
    this.props.onLeave();
  }

  render() {
    const { amount, confirmed, onOptionSelected } = this.props;
    return (
      confirmed
        ? <div className={styles.cash}>
          <h2>Please take your card and money. Have a nice day!</h2>
        </div> :
        <div className={styles.cash}>
          <Helmet title="Withdrawal" />
          {
            amount
              ? <h2>You have selected to withdrawal {amount} €, press OK to continue</h2>
              : <h2>Please select amount of withdrawal</h2>
          }
          <Options options={cashOptions} chooseHandler={onOptionSelected} />
        </div>
    );
  }
}

Cash.propTypes = {
  amount: PropTypes.number.isRequired,
  confirmed: PropTypes.bool.isRequired,
  onOptionSelected: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
};

const connector = connect(
  ({ cash }) => ({ ...cash }),
  dispatch => ({
    onLeave: () => dispatch(clearCash()),
    onOptionSelected: (amount) => {
      dispatch(selectCashOption(amount));
      dispatch(startInteractive());
    },
  }),
);

export default connector(Cash);
