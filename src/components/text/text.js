import React from 'react';
import PropTypes from 'prop-types';

import styles from './text.module.css';

const Text = ({ children }) => {

  return(
    <p className={styles.text}>
      {children}
    </p>
  )
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Text;
