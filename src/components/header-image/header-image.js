import React from 'react';
import Hello from '../icons/hello.js';

import styles from './header-image.module.css';

const HeaderImage = () => {

  return (
    <div className={styles.headerImage}>
      <Hello />
    </div>
  )
}

export default HeaderImage;
