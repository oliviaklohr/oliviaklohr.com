import React from 'react';
import Email from '../icons/email.js';
import Github from '../icons/github.js';
import Instagram from '../icons/instagram.js';
import Linkedin from '../icons/linkedin.js';
import Twitter from '../icons/twitter.js';

import styles from './socials.module.css';

const iconSize = 50;

const Socials = () => {
  return(
    <div className={styles.socials}>
      <a className={styles.iconWrapper} target="_blank" rel="noopener noreferrer" href="mailto:dev.oklohr@gmail.com">
        <Email size={iconSize}/>
      </a>
      <a className={styles.iconWrapper} target="_blank" rel="noopener noreferrer" href="https://github.com/oliviaklohr">
        <Github size={iconSize}/>
      </a>
      <a className={styles.iconWrapper} target="_blank" rel="noopener noreferrer" href="https://instagram.com/thelocalredhead">
        <Instagram size={iconSize}/>
      </a>
      <a className={styles.iconWrapper} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/oliviaklohr/">
        <Linkedin size={iconSize}/>
      </a>
      <a className={styles.iconWrapper} target="_blank" rel="noopener noreferrer" href="https://twitter.com/oliviaklohr">
        <Twitter size={iconSize}/>
      </a>
    </div>
  );
};

export default Socials;
