/* eslint-disable react/sort-comp */
/* @flow */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import Helmet from 'react-helmet';

import * as action from './action';
import type { Home as HomeType, Dispatch, Reducer } from '../../types';
import styles from './styles.scss';

type Props = {
  home: HomeType,
  fetchUsersIfNeeded: () => void,
};

// Export this for unit testing more easily
export class Home extends PureComponent {
  props: Props;

  static defaultProps: {
    home: {
      readyStatus: 'USERS_INVALID',
      list: null,
    },
    fetchUsersIfNeeded: () => {},
  };

  componentDidMount() {
    this.props.fetchUsersIfNeeded();
  }

  render() {
    return (
      <div className={styles.Home}>
        <Helmet title="Home" />
        <h3>IVN BANK</h3>
        <p>You can get money in cash here! Please insert your card</p>
      </div>
    );
  }
}

const connector: Connector<{}, Props> = connect(
  ({ home }: Reducer) => ({ home }),
  (dispatch: Dispatch) => ({
    fetchUsersIfNeeded: () => dispatch(action.fetchUsersIfNeeded()),
  }),
);

export default connector(Home);
