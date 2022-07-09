import React, { useState } from "react";


function App() {
  var [count,setCount] = useState(0);

function increase()
{
    setCount(count+1);

}
function decrease()
{
  setCount(count--)
}
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <div>
      <button onClick={decrease}>-</button>
      </div>
    </div>
  );
}

export default App;
