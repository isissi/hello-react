import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  const {buttonText, reset} = props;

  return (
    <button onClick={reset}>
      {buttonText}
    </button>
  );
};

const Application = () => {
  let [name, setName] = useState('');

  const reset = () => {
    console.log("reset");
    setName(name = '');
  };

  return (
    <main>
      <input value={name} placeholder='Type your name' onChange={(event) => setName(event.target.value)}></input>
      <Button buttonText = {'Reset'} reset = {reset}/>
      {name !== '' && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
