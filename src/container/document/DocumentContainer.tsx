import React, { useEffect } from 'react';
import DocumentComponent from '../../component/document/DocumentComponent';

function DocumentContainer() {
  useEffect(() => {
    const getWindow = import('../../../wasm-rust/pkg');
    getWindow
      .then(module => {
        console.log(module.create_element('create-element'));
      }).catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <div id='create-element'>
      <DocumentComponent />
    </div>
  );
}

export default DocumentContainer;