import React from 'react';
import Introduction from './components/introduction'
import './app.scss';
import HeaderSection from './components/header-section';
import About from './components/about';
import Work from './components/work';

const App = () => {
  return (
    <div className="app">
      <div className="left-section">
        <Introduction />
      </div>
      <div className="right-section">
        <HeaderSection />
        <About />
        <Work />
      </div>
    </div>
  );
}

export default App;
