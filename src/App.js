import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/dashboard/Home'
import CreateBookList from './components/lists/CreateBookList'
import Dashboard from './components/dashboard/Dashboard'
import BookDetails from './components/lists/BookDetails'

class App extends Component {
  render() {
    return (
    
      <BrowserRouter>

        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/create' component={CreateBookList} />
            <Route path='/book/:id' component={BookDetails} />
            <Route path='/dashboard' component={Dashboard} />
          </Switch>

          <Footer />
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
