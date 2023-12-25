import React,{Fragment} from "react";
import './App.css';
import InputTodos from './components/InputTodos';

function App() {
  return (
   <Fragment>
    <div className="container">
      <InputTodos/>
    </div>
   </Fragment>
  );
}

export default App;
