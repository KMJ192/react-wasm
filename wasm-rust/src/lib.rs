use wasm_bindgen::prelude::*;
extern crate js_sys;

#[wasm_bindgen]
pub fn console_log(arg: js_sys::Array) {
  web_sys::console::log(&arg);
}

#[wasm_bindgen]
pub fn console_log_1(arg: String) {
  web_sys::console::log_1(&arg.into());
}

pub mod wasm_document;
use wasm_document::*;
#[wasm_bindgen]
pub fn get_window(arg: String) {
  document_get_element_by_id(arg);
}

#[wasm_bindgen]
pub fn create_element(arg: String) {
  document_create_element(arg);
}

#[wasm_bindgen]
pub fn qeury_selector(arg: String) {
   document_query_selector(arg);
}

#[wasm_bindgen]
pub fn set_canvas(id: String, width: u32, height: u32) {
  document_set_html_canvas(id, width, height);
}

pub mod wasm_event;
use wasm_event::*;

#[wasm_bindgen]
pub fn on_click(id: String, btn_val: String) {
  click_event(id, btn_val);
}

#[wasm_bindgen]
pub fn closurebutton(id: String, btn_val: String) {
  closure_button(id, btn_val);
}

#[wasm_bindgen]
pub fn mouse_move_event(id: String) {
  mouse_move(id);
}

#[wasm_bindgen]
pub fn input_string(input: String, output: String) {
  keydown_event(input, output);
}