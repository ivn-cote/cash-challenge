import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Keypad from 'components/Keypad';
import Receiver from 'components/Receiver';

// import * as action from './action';
import styles from './hardware.scss';

export class Hardware extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      plugged: false,
    };
    this.blockReceiver = this.blockReceiver.bind(this);
  }

  blockReceiver() {
    this.setState({ plugged: true });
  }


  render() {
    const { plugged } = this.state;
    return (
      <div className={styles.hardware}>
        <Keypad />
        <Receiver isPlugged={plugged} handlePlug={this.blockReceiver} />
      </div>
    );
  }
}
const connector = connect(
  ({ home }) => ({ home }),
);

export default connector(Hardware);
