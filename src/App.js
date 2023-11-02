
import './App.css';
import MainContent from './components/MainContent';
import Ex from './assets/Close.svg'
import Logo from './assets/hirefy128.b11943b70587e47d0af3.avif.png'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body id='body'>
        <div id='frame'>
          <nav id='navbar'>
            <div id='logo_title'>
              <img src={Logo} alt='logo' id="logo"/>
              <h1 id="title">Hirefy</h1>
            </div>
            <img src={Ex} alt='close' id='ex'/>
          </nav>

          <div>
            <MainContent/>
          </div>

          <div id='footer-content'>
            <div id='links'>
              <a className='link'>Terms</a>
              <a className='link'>Privacy</a>
              <a className='link'>Security</a>
              <a className='link'>Version</a>
            </div>
            <footer id='footer'>© 2023 Hirefy, LLC.</footer>
          </div>
        </div>
      </body>
      
    </div>
  );
}

export default App;
