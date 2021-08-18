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