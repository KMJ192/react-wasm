import React, { useState } from 'react';
import { Redirect } from 'react-router';;

import classnames from 'classnames/bind';
import style from './MainComponent.module.scss';
const cx = classnames.bind(style);

import { DOCUMENT_PATH, EVENT_PATH } from '../static/address';

function MainComponent() {
  const [page, setPage] = useState({
    event: false,
    dom: false
  });

  const paging = {
    gotoDocument: () => {
      setPage({
        event: false,
        dom: true
      });
    },
    gotoEvent: () => {
      setPage({
        event: true,
        dom: false
      });
    }
  };

  if (page.dom === true) {
    return <Redirect to={DOCUMENT_PATH} />
  } else if (page.event === true) {
    return <Redirect to={EVENT_PATH} />
  }
  
  return (
    <div className={cx('button-group')}>
      <button onClick={paging.gotoDocument}>Document</button>
      <button onClick={paging.gotoEvent}>Event</button>
    </div>
  )
}

export default MainComponent;