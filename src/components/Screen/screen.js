import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './screen.scss';

const Screen = ({ children }) => (
  <div className={styles.screen}>
    {children}
  </div>
);

Screen.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Screen;
