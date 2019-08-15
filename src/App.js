import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/dashboard/Home'
import CreateBookList from './components/lists/CreateBookList'
// import BookList from './components/lists/BookList'
import Dashboard from './components/dashboard/Dashboard'
// import store from './store';
// import { Provider } from 'react-redux';
class App extends Component {
  render() {
    return (
    
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/create' component={CreateBookList} />
            {/* <Route path='/book-list' component={BookList} /> */}
             <Route path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Navbar />
//         <Switch>
//           <Route exact path='/' component= />
//           <Route path='/create' component={CreateBookList} />
//           <Route path='/book-list' component={BookList} />
//         </Switch>

//       </div>
//     </BrowserRouter>
//   );
// }

export default App;
