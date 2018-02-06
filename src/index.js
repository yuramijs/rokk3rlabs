import React from 'react';
import './index.scss';
import App from './App';

import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import Analytics from './routes/Analytics/Analytics';
import News from './routes/News/News';

ReactDOM.render(
  <BrowserRouter>
    <App>
       <Switch>
          <Route path='/analytics' component={Analytics} />
          <Route path='/news' component={News} />
       </Switch>
       </App>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
