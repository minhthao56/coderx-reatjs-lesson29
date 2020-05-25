import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import withFadeInWhenInView from './components/withFadeInWhenInView.js';

class App extends Component {
  render() {
    const fadingIn = withFadeInWhenInView(<h1>I'm fading innnnn...</h1>);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code>
          </p>
          <a
            className="App-link"
            href="https://coders-x.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hãy cuộn xuống dưới ở màn hình kết quả<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
          </a>
          <fadingIn text ="a" />
        </header>      
      </div>
    );
  }
}

export default App;
