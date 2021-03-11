import React, { FunctionComponent } from 'react';
import styles from './RoundAvatar.module.scss';

import logo from '../../assets/logo.png';

const RoundAvatar: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <img src={logo} />
    </div>
  );
};

export default RoundAvatar;
