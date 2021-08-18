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

pub fn document_get_elements_by_classname(id: String) -> web_sys::HtmlCollection {
  let window = get_window();
  let document = get_document(window);

  let node = document.get_elements_by_class_name(&id);
  node
}

pub fn document_create_element(classname: String) {
  let window = get_window();
  let document = get_document(window);
  
  let _parent = document_get_element_by_id(classname);

  let val = document.create_element("span").unwrap();
  val.set_inner_html("Learn React Wasm");
  _parent.append_child(&val).unwrap();
}