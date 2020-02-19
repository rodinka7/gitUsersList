import React from 'react';
import logo from './logo.jpg';
import Auth from './components/Auth';
import Users from './components/Users';
import Message from './components/Message';

import { Image, Href, AppDiv, FlexDiv } from './elements';

function App() {
  return (
    <AppDiv>
      <FlexDiv>
        <Image src={logo} name="Git List App Logo" width="70" />
        <Href
          className="App-link"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Git List App</h2>
        </Href>
      </FlexDiv>
      <div>
        <Auth />
        <Users />
        <Message />
      </div>
    </AppDiv>
  );
}

export default App;