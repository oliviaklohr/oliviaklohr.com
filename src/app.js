import React from 'react';
import HeaderImage from './components/header-image/header-image';
import Socials from './components/socials/socials.js';
import TextCard from './components/text-card/text-card';
import { useTitle } from './hooks/title.js';

import styles from './app.module.css';

const App = () => {
  useTitle("Hello");

  return(
    <div className={styles.wrapper}>
      <HeaderImage />
      <TextCard />
      <Socials />
    </div>
  )
}

export default App;
