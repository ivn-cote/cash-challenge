import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { goBack } from 'react-router-redux';
import { PropTypes } from 'prop-types';
import { urlPaths } from '../../routes';
import styles from './screen.scss';

const AbortBtn = () => (
  <div className={styles.abortLink}>
    <Link to={urlPaths.abort}>Get the card back</Link>
  </div>
);

const BackBtn = ({ onClick }) => (
  <div className={styles.backLink}>
    <a href={urlPaths.withdrawal} onClick={onClick}>Go back</a>
  </div>
);

BackBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const Screen = ({ children, waitMode, onBack }) => {
  const goBackScreen = (evt) => {
    evt && evt.preventDefault;
    onBack();
  };

  return (
    <div className={styles.screen}>
      {waitMode && <div className={styles.waitScreen} />}
      {children}
      {/* should be improved */}
      <Route path={urlPaths.withdrawalCustom} render={() => <BackBtn onClick={goBackScreen} />} />
      <Route path={urlPaths.withdrawal} component={AbortBtn} />
      <Route path={urlPaths.withdrawal} component={AbortBtn} />
      <Route path={urlPaths.pin} component={AbortBtn} />
    </div>
  );
};

Screen.propTypes = {
  onBack: PropTypes.func.isRequired,
  waitMode: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};


const connector = connect(
  ({ screen }) => ({ ...screen }),
  dispatch => ({
    onBack: () => {
      dispatch(goBack());
    },
  }),
);

export default connector(Screen);
