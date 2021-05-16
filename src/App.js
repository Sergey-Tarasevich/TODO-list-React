import React from 'react';
// import logo from './logo.svg';
// import epam from './epam-logo.svg';
import Header from './Header/header';
// import TodoList from './Main/TodoList';
import TodoListProduction from './Main/TodoListProduction';
import Footer from './Footer/Footer';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
        <article className="TodoList">
          <TodoListProduction />
        </article>
      </div>
    );
  }
}

export default App;
