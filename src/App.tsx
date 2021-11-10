import Introduction from './components/introduction';
import './app.scss';
import HeaderSection from './components/header-section';
import About from './components/about';
import Work from './components/work';
import Divider from './components/divider';
import Projects from './components/projects';
import Contact from './components/contact';
import NavMenu from './components/nav-menu';

const App = () => {
  return (
    <div className='app'>
      <NavMenu />
      <div className="app-section-container">
        <div className="left-section">
          <Introduction />
        </div>
        <div className="right-section">
          {/* <HeaderSection /> */}
          <About />
          <Divider />
          <Work />
          {/* <Divider /> */}
          {/* <Projects /> */}
          <Divider />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
