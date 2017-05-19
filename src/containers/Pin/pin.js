import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { securePIN } from './pinActions';

import styles from './pin.scss';

class Pin extends PureComponent {
  componentWillMount() {
    this.props.onOpen();
  }

  render() {
    const { pinCode, status, errors } = this.props;
    return (
      <div className={styles.pin}>
        <Helmet title="PIN requested" />

        <p>Please enter your PIN</p>
        {
          !_isEmpty(errors)
            && _map(errors, (val, key) => <div key={key} className={styles.error}>{val}</div>)
        }
        PINCODE: {(new Array(pinCode.length)).fill('*')}
        {
          status === 'pending'
            && <div className={styles.wait}>PIN is checking</div>
        }
      </div>
    );
  }
}

Pin.propTypes = {
  onOpen: PropTypes.func.isRequired,
  pinCode: PropTypes.arrayOf(PropTypes.string).isRequired,
  status: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
};

const connector = connect(
  ({ pin }) => ({ ...pin }),
  dispatch => ({
    onOpen: () => dispatch(securePIN()),
  }),
);

export default connector(Pin);
