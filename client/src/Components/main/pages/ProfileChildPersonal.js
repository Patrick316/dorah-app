import React, { Component } from 'react';
//import Lightbox from 'react-image-lightbox';
import HeaderSearch from '../HeaderSearch';
import Footer from '../Footer';
import app from '../../utils/profile-api.js';
import '../../../styles/wp/style.css'

class PersonalProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile:[],
      comments:[],
      title: 'Dorah',
      tag: '',
    };
  }
  componentWillMount(){
    app.getUser(this.props.id, this.props.type).then((data)=>{
      this.setState({profile:data});
      app.getUserComments(data[0].id).then((data)=>{
        this.setState({comments:data});
      });
    });

  }
  sidebarContent(){
      return this.state.profile.map((value,index)=>{
        return(
          <div className="profile-sidebar" key={index}>
            <div className="profile-card">
              <img src={value.better_featured_image.media_details.sizes.medium.source_url} alt={value.title.rendered} className="img-thumbnail profile-img"/>
            </div>
          </div>
        )
    });
  }
  mainExcerpt(){
      return this.state.profile.map((value, index)=>{
          return(
              <div className="profile-main-content" key={index}>
                <div className="profile-card">
                  <div className="header-tag"><strong>{value.title.rendered}</strong> </div>
                    <div className="excerpt-top" dangerouslySetInnerHTML={{__html: value.acf.excerpt}}/>
                </div>
            </div>
          )
      });
  }
  galleryContent(){
      return this.state.profile.map((value, index)=>{
      if(value.acf.business_photos){
          return(
            <div className="profile-main-content" key={index}>
              <div className="profile-card">
                {value.acf.business_photos.map((value,index)=>{
                    return <img src={value.sizes.medium} alt="restaurant pics" className="img-thumbnail" key={index}/>
                  })}
              </div>
          </div>
          )
            }
        });
  }
  aboutContent(){

      return this.state.profile.map((value, index)=>{
          if(value.acf.about){
          return(
            <div className="profile-main-content" key={index}>
              <div className="profile-card">
                <h4>About Me</h4>
                <div dangerouslySetInnerHTML={{__html: value.acf.about}}/>
              </div>
          </div>
          )
            }
      });
  }
  commentContent(){
    if(this.state.comments.length > 0)
        if(this.state.comments[0]){
          console.log(this.state.comments[0]);
          return(
            <div className="profile-main-content">
              <div className="profile-card">
                <h4>Comments & Reivews</h4>
                <section className="review-card">
                <strong><p dangerouslySetInnerHTML={{__html: this.state.comments[0].author_name}}/></strong>
                <p dangerouslySetInnerHTML={{__html: this.state.comments[0].content.rendered}}/>
              </section>
              </div>
          </div>
          )
        }
  }
  render() {
    return (
      <div className="Profile">
          <HeaderSearch site={this.state.title} tag={this.state.tag}/>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="profile-body">
                    {this.sidebarContent()}
                  </div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                  <div className="profile-body">
                    {this.mainExcerpt()}
                    {this.galleryContent()}
                    {this.aboutContent()}
                    {this.commentContent()}
                  </div>
              </div>
            </div>
          </div>
          <div className="Footer">
            <Footer/>
          </div>
      </div>
    )
  }


}

export default PersonalProfile;
