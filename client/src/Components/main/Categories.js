import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Card, CardImg, CardText, CardBlock} from 'reactstrap';
import app from '../utils/home-api.js';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories:[]
    };
  }
  componentDidMount(){
    app.getCategories().then((data) => {
      this.setState({categories:data.data});
    });
  }
  displayCategories(){
    return this.state.categories.map((value,index,array)=>{
      if(index < 8){
        return(
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 cat-space" key={index}>
              <Card>
                <CardBlock>
                  <CardImg src={value.img} alt="{value.name}" className="img-thumbnail"/>
                  <CardText><a href={"/category/" + value.slug}>{value.name}</a></CardText>
                  </CardBlock>
              </Card>
          </div>
        )
      }
    });
  }
  render() {
    return (
        <div className="container">
          <div className="row ">
            {this.displayCategories()}
          </div>
          <div className="row row-bottom-space">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

            <p className="more-tab">More <FontAwesome name='angle-down' /></p>
            </div>
          </div>

        </div>

    )}


}
export default Category;
