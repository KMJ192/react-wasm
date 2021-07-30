import React, { useState, useEffect } from 'react';

interface WasmModule{
  default: typeof import("../node_modules/wasm-set/wasm_rust");
  greet(name: string): void;
  add(a: number, b: number): number;
  sub(a: number, b: number): number;
  mul(a: number, b: number): number;
  div(a: number, b: number): number;
  rust_vec(): Int32Array;
}

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      import('wasm-set').then((module: WasmModule) => {
        if(count < 9){
          console.log(module.rust_vec()[count]);
          setCount(module.add(count, 1));
        }else{
          setCount(0);
        }
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