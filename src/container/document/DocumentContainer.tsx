import React, { useEffect } from 'react';
import DocumentComponent from '../../component/document/DocumentComponent';

function DocumentContainer() {
  useEffect(() => {
    const getWindow = import('../../../wasm-rust/pkg');
    getWindow
      .then(module => {
        //module.qeury_selector('query-selector');
        module.set_canvas("canvas",  500, 500);
      }).catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <div id='query-selector'>
      <DocumentComponent />
    </div>
  );
}

export default DocumentContainer;