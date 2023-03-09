import React from 'react';
// import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
// import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
// import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./App.css";
import  Logo from'./assets/logo.png';

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            {/* <img src="logo.png" alt="LOGO" /> */}
            <img src={Logo} alt="LOGO"></img>
          </div>
          </div>
          {/* <div className="logo">
            <a href="."></a>
          </div> */}
          {/* <div className="social">
            <a href="https://facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer">
              <IconFacebook className="icon" />
            </a>
            <a href="https://twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
            <a href="https://github.com/arkn98/coming-soon" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
          </div> */}
        
        <div className="content">
          <div className="title-holder">
            <h1>Getting Ready for change.</h1>
            <p>Website coming soon. Please check back to know more. DM us on Instagram  if you're curious.</p>
          </div>
          <a href="https://www.instagram.com/thebusytoddlersclub/?igshid=YmMyMTA2M2Y%3D">
            <div className="cta">Check Our Instagram</div>
          </a>
        </div>
        {/* <div className="footer">
          <span>made by <a className="underlined" href="https://github.com/arkn98" target="_blank" rel="noopener noreferrer">arkn98</a> using <a className="underlined" href="https://reactjs.org/" title="ReactJS" target="_blank" rel="noopener noreferrer">React</a> | <a className="underlined" href="https://github.com/arkn98/coming-soon" title="GitHub repo" target="_blank" rel="noopener noreferrer">GitHub</a></span>
        </div> */}
      </div>
    );
  }
}

export default App;