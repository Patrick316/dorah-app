import React, { Component } from 'react';
import Search from './Search';
import Category from './Categories';
import SignUp from './SignUpForm';
import Footer from './Footer';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header site="Dorah" tag="Welcome to"/>
        <div className="Search-intro">
        <Search />
        </div>
        <div className="Cat-intro">
        <Category />
        </div>
        <div className="Signup-intro">
        <SignUp />
        </div>
        <div className="Footer">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
