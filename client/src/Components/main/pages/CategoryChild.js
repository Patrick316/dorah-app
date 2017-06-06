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
      this.setState({res_cats:data});
    });
  }
  resCards(){
    // let customLink = (type, slug) =>{
    //   if(type === 'personal'){
    //     return <Link to={'/user/'+type+'/'+slug}>More</Link>
    //   }else{
    //     return <Link to={'/'+type+'/'+slug}>More</Link>
    //   }
    // }
    //   return this.state.res_cats.map((value, index)=>{
    //     return(
    //       <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" key={index}>
    //           <Card>
    //             <CardBlock>
    //                 <CardImg src={value.better_featured_image.media_details.sizes.thumbnail.source_url} alt={value.title.rendered} className="img-thumbnail"/>
    //                 <CardTitle><strong>{value.title.rendered}</strong></CardTitle>
    //                 <CardText><strong>{value.acf.location[0].city}</strong>, {value.acf.location[0].state}</CardText>
    //                 <CardText dangerouslySetInnerHTML={{__html: value.acf.front_tag}}></CardText>
    //                 <Button color="primary" width="100%">{customLink(value.type, value.slug)}</Button>
    //               </CardBlock>
    //           </Card>
    //       </div>
    //       console.log(value);
    //     )
    //   });
    console.log(this.state.res_cats);
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
