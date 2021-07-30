import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    setTimeout(() => {
      import('wasm-set').then(module => {
        setCount(module.add(count, 1));
      });
    }, 1000);
  }, [count]);

  return(
    <div className="app">
      연산 결과 {count}
    </div>
  );
}

export default App;