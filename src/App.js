import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import CreateReadingList from './components/lists/CreateReadingList'
import ReadingList from './components/lists/ReadingList'
import Book from './components/books/Book'
// import SearchBooks from './components/dashboard/SearchBooks'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/create' component={CreateReadingList} />
            <Route path='/reading-list' component={ReadingList} />
             <Route path='/:book_id' component={Book} />
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
//           <Route path='/create' component={CreateReadingList} />
//           <Route path='/reading-list' component={ReadingList} />
//           {/* <Route path='/:book_id' component={Book} /> */}
//         </Switch>

//       </div>
//     </BrowserRouter>
//   );
// }

export default App;
