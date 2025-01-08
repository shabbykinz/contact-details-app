import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListUserComponent from './components/ListUserComponent';
import CreateUserComponent from './components/CreateUserComponent';
import ViewUserComponent from './components/ViewUserComponent';
import NotFound from "./components/PageNotFound";

function App() {
  return (
    <div>
        <Router>
             
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListUserComponent}></Route>
                          <Route path = "/contact" component = {ListUserComponent}></Route>
                          <Route path = "/add-contact/:id" component = {CreateUserComponent}></Route>
                          <Route path = "/view-contact/:id" component = {ViewUserComponent}></Route>
                          
                          <Route path = '*'  component={NotFound} ></Route>
                          
                          
                    </Switch>
                </div>
        </Router>
    </div>
    
  );
}

export default App;