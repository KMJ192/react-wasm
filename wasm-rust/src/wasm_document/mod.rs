use wasm_bindgen::JsCast;
// use wasm_bindgen::JsValue;

fn get_window() -> web_sys::Window {
  let window = web_sys::window().expect("global window dose not exist");
  window
}

fn get_document(window: web_sys::Window) -> web_sys::Document {
  let document = window.document().expect("expecting a document on window");
  document
}

pub fn document_get_element_by_id(id: String) -> web_sys::HtmlElement {
  let window = get_window();
  let document = get_document(window);

  let node = document.get_element_by_id(&id)
              .unwrap()
              .dyn_into::<web_sys::HtmlElement>()
              .unwrap();
  node
}

pub fn document_create_element(id: String) {
  let window = get_window();
  let document = get_document(window);
  
  let _parent = document_get_element_by_id(id);
  let tmp = "
    <div>
      create div tag
    </div>
    <span>
      create span tag
    </span>
  ";
  let div_ele = document.create_element("div").unwrap();
  div_ele.set_inner_html(tmp);
  _parent.append_child(&div_ele).unwrap();
}

pub fn document_query_selector(id: String) {
  let window = get_window();
  let document = get_document(window);

  let mut query = String::from("#");
  query.push_str(&id);

  let node = document.query_selector(&query)
              .unwrap()
              .unwrap()
              .dyn_into::<web_sys::HtmlElement>()
              .unwrap();
  let tmp = "set string from query-selector";
  node.set_inner_text(&tmp);
}