import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { urlPaths } from '../../routes';
import styles from './screen.scss';

const AbortBtn = () => (
  <div className={styles.abortLink}>
    <Link to={urlPaths.abort}>Get the card back</Link>
  </div>
);

const Screen = ({ children, waitMode }) => (
  <div className={styles.screen}>
    {waitMode && <div className={styles.waitScreen} />}
    {children}
    <Route path={urlPaths.withdrawal} component={AbortBtn} />
    <Route path={urlPaths.pin} component={AbortBtn} />
  </div>
);

Screen.propTypes = {
  waitMode: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};


const connector = connect(
  ({ screen }) => ({ ...screen }),
  () => ({}),
);

export default connector(Screen);
