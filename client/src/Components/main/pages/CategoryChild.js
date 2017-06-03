import React, { Component } from 'react';
import Header from '../Header';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Dorah',
      tag: '',
    };
  }
  render() {
    return (
      <div className="Category">
          <Header site={this.state.title} tag={this.state.tag}/>
          <p>Hello from categories.</p>
      </div>
    )
  }


}

export default Category;
