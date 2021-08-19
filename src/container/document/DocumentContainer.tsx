import React, { useEffect } from 'react';
import DocumentComponent from '../../component/document/DocumentComponent';

function DocumentContainer() {
  useEffect(() => {
    const getWindow = import('../../../wasm-rust/pkg');
    getWindow
      .then(module => {
        module.qeury_selector('query-selector');
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