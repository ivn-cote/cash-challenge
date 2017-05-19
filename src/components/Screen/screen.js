import React from 'react';
import { Link, Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { urlPaths } from '../../routes';
import styles from './screen.scss';

const AbortBtn = () => (
  <div className={styles.abortLink}>
    <Link to={urlPaths.abort}>Get the card back</Link>
  </div>
);

const Screen = ({ children }) => (
  <div className={styles.screen}>
    {children}
    <Route path={urlPaths.withdrawal} component={AbortBtn} />
    <Route path={urlPaths.pin} component={AbortBtn} />
  </div>
);

Screen.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Screen;
