import React, { Component } from 'react';
import HeaderSearch from '../HeaderSearch';
import Footer from '../Footer';
import app from '../../utils/category-api';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, Button, Tooltip } from 'reactstrap';
import {
    Link
  } from 'react-router-dom';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Dorah',
      tag: '',
      res_cats:''
    };
  }
  componentDidMount(){
    app.getCategories(this.props.id).then((data)=>{
      console.log(data);
      this.setState({res_cats:data});
    });
  }
  resCards(){
    let customLink = (type, slug) =>{
      if(type === 'personal'){
        return <Link to={'/user/'+type+'/'+slug}>More</Link>
      }else{
        return <Link to={'/'+type+'/'+slug}>More</Link>
      }
    }
    for(let i = 0; i < this.state.res_cats.length; i++){
      return(
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <Card>
              <CardBlock>
                  <CardImg src={this.state.res_cats[i].better_featured_image.media_details.sizes.thumbnail.source_url} alt={this.state.res_cats[i].title.rendered} className="img-thumbnail"/>
                  <CardTitle><strong>{this.state.res_cats[i].title.rendered}</strong></CardTitle>
                  <CardText><strong>{this.state.res_cats[i].acf.location[0].city}</strong>, {this.state.res_cats[i].acf.location[0].state}</CardText>
                  <CardText dangerouslySetInnerHTML={{__html: this.state.res_cats[i].acf.front_tag}}></CardText>
                  <Button color="primary" width="100%">{customLink(this.state.res_cats[i].type, this.state.res_cats[i].slug)}</Button>
                </CardBlock>
            </Card>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="Category">
          <HeaderSearch site={this.state.title} tag={this.state.tag}/>
            <div className="container">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {this.resCards()}
               </div>
            </div>
          <Footer/>
      </div>
    )
  }


}

export default Category;
