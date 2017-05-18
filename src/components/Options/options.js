import React from 'react';
import _partial from 'lodash/partial';
import { PropTypes } from 'prop-types';
import styles from './options.scss';

const OptionBtn = ({ title, onClick }) => (
  <button className={styles.optionBtn} onClick={onClick}>
    {title}
  </button>
);

OptionBtn.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const Options = ({ options, chooseHandler }) => (
  <div className={styles.options}>
    {
      options.map(({ title, data }) =>
        <OptionBtn title={title} onClick={_partial(chooseHandler, data)} />)
    }
  </div>
);

Options.propTypes = {
  options: PropTypes.shape({
    title: PropTypes.string,
    data: PropTypes.string,
  }).isRequired,
  chooseHandler: PropTypes.func.isRequired,
};

export default Options;
