import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Header extends Component{
  render() {
    return (
      <div className="full-header">
          <div className="App-header">
            <div className="header-logo">
              <Link to="/"><h2>{this.props.tag}</h2>
              <h2>{this.props.site}</h2></Link>
            </div>
          </div>
      </div>
)
}
}

export default Header
