use gloo::{events::EventListener};
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;

use super::wasm_document;

pub fn click_event(id: String, btn_val: String) {
  // let window = wasm_document::get_window();
  // let document = wasm_document::get_document(window);

  // let paragraph = document.create_element("p")
  //                   .unwrap()
  //                   .dyn_into::<web_sys::HtmlParagraphElement>()
  //                   .unwrap();

  let message_tag = wasm_document::document_get_element_by_id(String::from("message"));
  // message_tag.append_child(&paragraph).unwrap();

  let button = wasm_document::document_get_element_by_id(id);
  button.set_text_content(Some(&btn_val));
  
  let on_click = EventListener::new(&button, "click", move |_event| {
    web_sys::console::log_1(&String::from("button click!!").into());
    message_tag.set_text_content(Some("일반 버튼 클릭 이벤트"));
    // paragraph.set_text_content(Some(&"버튼 클릭 이벤트"));
  });

  on_click.forget();
}

pub fn closure_button (id: String, btn_val: String) {
  let window = wasm_document::get_window();
  let document = wasm_document::get_document(window);

  let closure_document = document.clone();
  let closure_button_document = document.clone();

  let mut warn_string = String::from("#");
  warn_string.push_str(&id);
  warn_string.push_str("be an 'HtmlElement'");

  let closure_button = Closure::wrap(Box::new(move || {
    web_sys::console::log_1(&"closure button".into());
    closure_document
      .get_element_by_id(&"message")
      .expect("should have a button on the page")
      .dyn_ref::<web_sys::HtmlElement>()
      .expect(&warn_string)
      .set_text_content(Some("클로저 버튼 클릭 이벤트"));
  }) as Box<dyn FnMut()>);

  closure_button_document
    .get_element_by_id(&id)
    .unwrap()
    .set_text_content(Some(&btn_val));

  document
    .get_element_by_id(&id)
    .expect("closure-button")
    .dyn_ref::<web_sys::HtmlElement>()
    .expect("#closure-button is not `Html Element`")
    .set_onclick(Some(closure_button.as_ref().unchecked_ref()));

  closure_button.forget();
}

pub fn mouse_move(id: String) {
  let window = wasm_document::get_window();
  let document = wasm_document::get_document(window);
  let division = wasm_document::document_get_element_by_id(id);

  let paragraph = document
                    .create_element("p")
                    .unwrap()
                    .dyn_into::<web_sys::HtmlParagraphElement>()
                    .map_err(|_| ())
                    .unwrap();
  paragraph.set_align("center");
  paragraph.set_inner_html("<hr /> mouse move event <hr />");
  
  let on_move = EventListener::new(&paragraph, "mousemove", move |_event| {
    web_sys::console::log_1(&"mouse moving".into());
  });

  on_move.forget();
  division.append_child(&paragraph).unwrap();
  
}

pub fn keydown_event(input_id: String, output_id: String) {
  let input_tag = wasm_document::document_get_element_by_id(input_id);
  let output_tag = wasm_document::document_get_element_by_id(output_id);

  let on_keydown = EventListener::new(&input_tag, "keydown", move |_event| {
    let keyboard_event = _event
                          .clone()
                          .dyn_into::<web_sys::KeyboardEvent>()
                          .unwrap();
    let mut event_string = String::from("");
    event_string.push_str(&_event.type_());
    event_string.push_str(&" : ");
    event_string.push_str(&keyboard_event.key());

    output_tag.set_text_content(Some(&event_string));
  });

  on_keydown.forget();
}

// //Create a paragraph element with an EventListener. When the mousedown event is triggered, a message will be logged to the console.
// pub fn eventlistener_new_p_mousedown()
// {
//     let window = web_sys::window().expect("global window does not exists");    
//     let document = window.document().expect("expecting a document on window");
//     let body = document.body().expect("document expect to have have a body");

//     let paragraph = document.create_element("p").unwrap()
//     .dyn_into::<web_sys::HtmlParagraphElement>()
//     .map_err(|_| ())
//     .unwrap();

//     paragraph.set_align("center");
//     paragraph.set_inner_html("<br />Click within this boundary to test the mousedown event. <br />Check the results in your web console.<br /><br />");

//     paragraph.style()
//         .set_property("border", "solid")
//         .map_err(|_| ())
//         .unwrap();

//     let on_down = EventListener::new(&paragraph, "mousedown", move |_event| {
//         web_sys::console::log_1(&"Paragrapah mousedown".into());
//     });
//     on_down.forget();
//     body.append_child(&paragraph).unwrap();

// }

// //Create a paragraph element with an EventListener. When the mouseup event is triggered, a message will be logged to the console.
// pub fn eventlistener_new_p_mouseup()
// {
//     let window = web_sys::window().expect("global window does not exists");    
//     let document = window.document().expect("expecting a document on window");
//     let body = document.body().expect("document expect to have have a body");

//     let paragraph = document.create_element("p").unwrap()
//     .dyn_into::<web_sys::HtmlParagraphElement>()
//     .map_err(|_| ())
//     .unwrap();

//     paragraph.set_align("center");
//     paragraph.set_inner_html("<br />Move within this boundary to test the mouseup event. <br />Check the results in your web console.<br /><br />");

//     paragraph.style()
//         .set_property("border", "solid")
//         .map_err(|_| ())
//         .unwrap();

//     let on_up = EventListener::new(&paragraph, "mouseup", move |_event| {
//         web_sys::console::log_1(&"Paragrapah mouseup".into());
//     });
//     on_up.forget();
//     body.append_child(&paragraph).unwrap();

// }