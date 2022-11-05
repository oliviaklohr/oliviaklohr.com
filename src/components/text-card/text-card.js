import React from 'react';
import Text from '../text/text.js';

import styles from './text-card.module.css';

const TextCard = () => {

  return(
    <div className={styles.textCard}>
      <Text>My name is Olivia Klohr.</Text>
      <Text>I'm a Kansas City native turned Seattle transplant, avid coffee drinker, vintage car enthusiast, and software engineer.</Text>
      <Text>As a backend-focused, full-stack developer, I am passionate about making the world a beautiful, well-documented, and accessible place through the software I help create.</Text>
      <Text>I'm so excited to see what we can create together!</Text>
    </div>
  )
}

export default TextCard;
