import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import _noop from 'lodash/noop';

import styles from './receiver.scss';

const MIN_TICK = 0;
const MAX_TICK = 5;

export class Receiver extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      plugLevel: props.isPlugged ? MIN_TICK : MAX_TICK,
    };
    this.watchPlug = this.watchPlug.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    nextProps.isPlugged && this.setState({ plugLevel: MIN_TICK });
  }

  watchPlug(evt) {
    const { handlePlug } = this.props;
    const plugLevel = evt.target.value;
    this.setState({ plugLevel });
    plugLevel == MIN_TICK && handlePlug();
  }

  render() {
    const { plugLevel } = this.state;
    const { isPlugged } = this.props;

    return (
      <div className={styles.receiver}>
        {
          isPlugged
            ? <p>Press Cancel to eject the card</p>
            : <p>Please insert your card</p>
        }

        <div className={styles.slot}>
          <div className={styles.slotM} style={{ transform: `translateY(${(MAX_TICK - plugLevel) * -19}px)` }}>
            <div className={styles.card}>
              ivn bank
            </div>
          </div>
        </div>

        <input
          className={styles.plugin}
          type="range"
          disabled={isPlugged}
          value={plugLevel}
          min={MIN_TICK}
          max={MAX_TICK}
          onChange={this.watchPlug}
        />
      </div>
    );
  }
}

Receiver.propTypes = {
  isPlugged: PropTypes.bool,
  handlePlug: PropTypes.func,
};

Receiver.defaultProps = {
  isPlugged: false,
  handlePlug: _noop,
};

export default Receiver;
