use wasm_bindgen::JsCast;
use wasm_bindgen::JsValue;

use super::wasm_document;

pub fn svgelement_set_attribute(id: String) -> Result<(), JsValue> {
  let window = wasm_document::get_window();
  let document = wasm_document::get_document(window);
  let object = wasm_document::document_get_element_by_id(id);

  let svg = document.create_element_ns(Some("http://www.w3.org/2000/svg"), "svg")
              .unwrap()
              .dyn_into::<web_sys::SvgElement>()
              .map_err(|_| ())
              .unwrap();

  svg
    .style()
    .set_property("border", "solid")?;

  svg.set_attribute("width","500")?;
  svg.set_attribute("height","500")?;
  svg.set_attribute("viewBox", "0 0 500 500")?;

  let circle = document.create_element_ns(Some("http://www.w3.org/2000/svg"), "circle")?;
  circle.set_attribute("cx", "100")?;
  circle.set_attribute("cy", "100")?;
  circle.set_attribute("r", "60")?;
  circle.set_attribute("stroke", "black")?;
  circle.set_attribute("fill", "blue")?;
  svg.append_child(&circle)?;

  object.append_child(&svg)?;

  Ok(())
}