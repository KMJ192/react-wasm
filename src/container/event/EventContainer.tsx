import React, { useEffect } from 'react'
import EventComponent from '../../component/event/EventComponent';

function EventContainer() {
  import('./../../../wasm-rust/pkg').then(module => {
    module.on_click("wasm-onclick");
  })

  return (
    <EventComponent />
  );
}

export default EventContainer
