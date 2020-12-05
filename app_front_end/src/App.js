import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import FileUpload from './FileUpload'

function App() {
  return (
    <div className="app">
      {/* <h1>Hello App</h1> */}
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" component={}/> */}
        </Switch> 
      </BrowserRouter>
      <div className="app__body">
        <FileUpload/>
      </div>
    </div>
  );
}
export default App;
