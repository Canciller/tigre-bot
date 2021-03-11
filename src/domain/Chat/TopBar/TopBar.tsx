import React, { FunctionComponent } from 'react';
import styles from './TopBar.module.scss';

import RoundAvatar from '../../../components/RoundAvatar';

const TopBar: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <RoundAvatar />
      <p className={styles.title}>TigreBot</p>
    </div>
  );
};

export default TopBar;
