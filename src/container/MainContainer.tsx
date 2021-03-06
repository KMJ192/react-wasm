import React, { useState } from "react";
import { Redirect } from "react-router";

import classnames from "classnames/bind";
import style from "./MainComponent.module.scss";
const cx = classnames.bind(style);

import {
  ARRAY_PATH,
  DOCUMENT_PATH,
  EVENT_PATH,
  SVG_PATH,
} from "../static/address";

function MainComponent() {
  const [page, setPage] = useState({
    event: false,
    dom: false,
    arr: false,
    svg: false,
  });

  const paging = {
    gotoHome: () => {
      setPage({
        event: false,
        dom: false,
        arr: false,
        svg: false,
      });
    },
    gotoDocument: () => {
      setPage({
        event: false,
        dom: true,
        arr: false,
        svg: false,
      });
    },
    gotoEvent: () => {
      setPage({
        event: true,
        dom: false,
        arr: false,
        svg: false,
      });
    },
    gotoArray: () => {
      setPage({
        event: false,
        dom: false,
        arr: true,
        svg: false,
      });
    },
    gotoSvg: () => {
      setPage({
        event: false,
        dom: false,
        arr: false,
        svg: true,
      });
    },
  };

  if (page.dom === true) {
    return <Redirect to={DOCUMENT_PATH} />;
  } else if (page.event === true) {
    return <Redirect to={EVENT_PATH} />;
  } else if (page.arr === true) {
    return <Redirect to={ARRAY_PATH} />;
  } else if (page.svg === true) {
    return <Redirect to={SVG_PATH} />;
  }

  return (
    <div className={cx("button-group")}>
      <button onClick={paging.gotoDocument}>Document</button>
      <button onClick={paging.gotoEvent}>Event</button>
      <button onClick={paging.gotoArray}>Array</button>
      <button onClick={paging.gotoSvg}>SVG</button>
    </div>
  );
}

export default MainComponent;
