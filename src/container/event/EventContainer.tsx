import React, { useEffect } from 'react'
import EventComponent from '../../component/event/EventComponent';

function EventContainer() {
  // useEffect(() => {
  //   import('../../../wasm-rust/pkg').then(module => {
  //     module.on_click('wasm-onclick', '일반버튼');
  //     module.closurebutton('closure-button', '클로저버튼');
  //     module.mouse_move_event('mouse-move');
  //     module.input_string('input', 'output-key-event');
  //   });
  // }, []);

  return (
    <EventComponent />
  );
}

export default EventContainer;