import React, { Component } from 'react';

export class Home extends React.Component {
  render() {
    return (
        <div>
          <p>Home Works!</p>
          {process.env.GOOGLE_URL}
        </div>
    );
  }
}

export default Home;