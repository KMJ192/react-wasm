import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import NotFound from './container/NotFound';
import MainContainer from './container/MainContainer';
import DocumentContainer from './container/document/DocumentContainer';
import EventContainer from './container/event/EventContainer';

import classnames from 'classnames/bind';
import style from './App.module.scss';
const cx = classnames.bind(style);

import { ARRAY_PATH, DOCUMENT_PATH, EVENT_PATH } from './static/address';
import ArrayContainer from './container/array/ArrayContainer';

function App() {
  return(
    <div className={cx('app')}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={MainContainer} />
          <Route path={DOCUMENT_PATH} exact component={DocumentContainer} />
          <Route path={EVENT_PATH} exact component={EventContainer} />
          <Route path={ARRAY_PATH} exact component={ArrayContainer} />
          <Route exact component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default React.memo(App);