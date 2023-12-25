import React,{Fragment} from "react";
import './App.css';
import InputTodos from './components/InputTodos';
import ListTodos from './components/ListTodos';

function App() {
  return (
   <Fragment>
    <div className="container">
      <InputTodos/>
      <ListTodos/>
    </div>
   </Fragment>
  );
}

export default App;
