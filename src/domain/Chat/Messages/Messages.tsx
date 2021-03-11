import React, { FunctionComponent } from 'react';
import Message from '../../../components/Message';
import styles from './Messages.module.scss';

const Messages: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.messages}>
          <Message text="Message 1" />
          <Message text="Message 2" direction="LEFT" />
          <Message text="Message 3" />
          <Message text="Message 4" direction="LEFT" />
          <Message text="Message 5" />
          <Message text="Message 6" />
          <Message text="Message 7" direction="LEFT" />
          <Message text="Message 8" />
          <Message text="Message 9" direction="LEFT" />
          <Message text="Message 10" />
        </div>
      </div>
    </div>
  );
};

export default Messages;
