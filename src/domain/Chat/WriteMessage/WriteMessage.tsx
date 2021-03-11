import React, { FunctionComponent } from 'react';
import styles from './WriteMessage.module.scss';
import SendIcon from '../../../components/SendIcon';

const WriteMessage: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <input className={styles.message} type="text" />
      <div className={styles.send}>
        <SendIcon />
      </div>
    </div>
  );
};

export default WriteMessage;
