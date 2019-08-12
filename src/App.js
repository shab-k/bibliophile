import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import CreateReadingList from './components/lists/CreateReadingList'
// import SearchBooks from './components/dashboard/SearchBooks'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/create' component={CreateReadingList} />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
