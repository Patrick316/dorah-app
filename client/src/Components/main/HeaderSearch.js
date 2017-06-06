import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import { Button, Tooltip } from 'reactstrap';

class HeaderSearch extends Component{
  constructor(props) {
    super(props);
    this.state = {
      tooltipOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }
  render() {
    return (
      <div className="full-header header-search-container">
          <div className="App-header">
            <div className="header-logo">
              <Link to="/"><h2>{this.props.tag}</h2>
              <h2>{this.props.site}</h2></Link>
            </div>
            <ul className="header-search">
               <li><input type="text" placeholder="Search by city, cuisine, reviews " className="main-search-input"/></li>
               <li><Button color="secondary" className="main-search-buttons"><i className="fa fa-search" aria-hidden="true"></i></Button></li>
               <li>
                 <Button color="secondary" id="TooltipExample" className="main-search-buttons"><i className="fa fa-location-arrow" aria-hidden="true"></i></Button>
                 <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
                      Search by your Location
                 </Tooltip>
               </li>
            </ul>
          </div>
      </div>
)
}
}

export default HeaderSearch
