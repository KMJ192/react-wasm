import React from 'react';

function App() {
  import('wasm-rust').then(module => {
    module.greet("webassembly 연동 성공!");
  });

  return(
    <div className="app">
      Setting react from webpack
    </div>
  );
}

export default App;