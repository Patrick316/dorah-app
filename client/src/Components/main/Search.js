import React, { Component } from 'react';
import app from '../utils/home-api.js';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, Button, Tooltip } from 'reactstrap';
import {
    Link
  } from 'react-router-dom';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants:[],
      tooltipOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }
  componentWillMount(){
    app.getFeatured().then((data)=>{
      this.setState({restaurants:data});
    });
  }
  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }
  resCards(){
    let customLink = (type, slug) =>{
      if(type === 'personal'){
        return <Link to={'/profile/'+type+'/'+slug}>More</Link>
      }else{
        return <Link to={'/'+type+'/'+slug}>More</Link>
      }
    }
      return this.state.restaurants.map((value, index)=>{
        return(
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" key={index}>
              <Card>
                <CardBlock>
                    <CardImg src={value.better_featured_image.media_details.sizes.thumbnail.source_url} alt={value.title.rendered} className="img-thumbnail"/>
                    <CardTitle><strong>{value.title.rendered}</strong></CardTitle>
                    <CardText><strong>{value.acf.location[0].city}</strong>, {value.acf.location[0].state}</CardText>
                    <CardText dangerouslySetInnerHTML={{__html: value.acf.front_tag}}></CardText>
                    <Button color="primary" width="100%">{customLink(value.type, value.slug)}</Button>
                  </CardBlock>
              </Card>
          </div>
        )
      });
  }
  render() {
    return (
      <div className="container search-container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12">
              <ul className="search-items">
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
            {this.resCards()}
        </div>
      </div>
    )
  }


}

export default Search;
