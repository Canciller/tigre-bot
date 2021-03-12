import React, { FunctionComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from '../../views/Home';
import { MessagesProvider } from '../../context/Messages';

const TITLE = 'TigreBot';
const DESCRIPTION = 'TigreBot';

const App: FunctionComponent = () => {
  return (
    <MessagesProvider>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </MessagesProvider>
  );
};

export default App;
