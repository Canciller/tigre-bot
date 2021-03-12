import React, { FunctionComponent, ReactNode, useReducer } from 'react';

export type DirectionType = 'LEFT' | 'RIGHT';

export type MessageType = {
  text: string;
  direction: DirectionType;
};

export type MessagesType = Array<MessageType>;

export type MessagesAction = {
  type: 'ADD';
  message: MessageType;
};

export const MessagesContext = React.createContext<{
  messages: MessagesType;
  dispatch?: React.Dispatch<MessagesAction>;
}>({
  messages: [],
});

export const MessagesConsumer = MessagesContext.Consumer;

interface MessagesProviderProps {
  children?: ReactNode;
  messages?: MessagesType;
}

function reducer(state: MessagesType, action: MessagesAction): MessagesType {
  const newState = state.slice();

  switch (action.type) {
    case 'ADD':
      newState.push(action.message);
      return newState;
  }
}

export const MessagesProvider: FunctionComponent<MessagesProviderProps> = ({
  children,
  messages = [],
}: MessagesProviderProps) => {
  const [state, dispatch] = useReducer(reducer, messages);

  return (
    <MessagesContext.Provider
      value={{
        messages: state,
        dispatch,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
};
