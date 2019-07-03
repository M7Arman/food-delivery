import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import Header from './components/header/Header';
import MainContent from './components/main/MainContent';

import './styles/App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <MainContent />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
