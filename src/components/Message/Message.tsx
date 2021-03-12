import React, { FunctionComponent } from 'react';
import styles from './Message.module.scss';

interface MessageProps {
  text?: string;
  direction?: 'RIGHT' | 'LEFT';
  level?: 'ERROR' | undefined;
}

const Message: FunctionComponent<MessageProps> = ({ text = '', direction = 'RIGHT', level }: MessageProps) => {
  return (
    <div
      className={`${styles.root} ${direction == 'RIGHT' ? styles.right : styles.left} ${
        level === 'ERROR' && styles.error
      }`}
    >
      <p className={`${styles.message}`}>{text}</p>
    </div>
  );
};

export default Message;
