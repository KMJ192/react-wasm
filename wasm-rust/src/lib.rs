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