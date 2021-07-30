use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("{}", name));
}

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32{
    a + b
}

#[wasm_bindgen]
pub fn sub(a: i32, b: i32) -> i32{
    a - b
}

#[wasm_bindgen]
pub fn mul(a: i32, b: i32) -> i32{
    a * b
}

#[wasm_bindgen]
pub fn div(a: i32, b: i32) -> i32{
    a / b
}

pub fn tmp() -> Vec<i32>{
    vec![1, 2, 3, 4, 5, 6, 7, 8, 9]
}