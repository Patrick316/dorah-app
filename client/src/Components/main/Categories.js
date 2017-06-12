import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Card, CardImg, CardText, CardBlock} from 'reactstrap';
import app from '../utils/home-api.js';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories:[],
      cateight:[]
    };
  }
  componentDidMount(){
    app.getCategories().then((data) => {
      let firstEight = [];
      this.setState({categories:data.data});
      for(let i = 0; i < 8; i++){
        firstEight.push(data.data[i]);
      }
      this.setState({cateight:firstEight});
    });
  }
  displayCategories(){
    return this.state.cateight.map((value,index,array)=>{
        return(
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 cat-space" key={index}>
              <Card>
                <CardBlock>
                  <CardImg src={value.img} alt="{value.name}" className="img-thumbnail"/>
                  <CardText><a href={"/" + value.slug}>{value.name}</a></CardText>
                  </CardBlock>
              </Card>
          </div>
        )
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
