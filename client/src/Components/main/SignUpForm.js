import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, Text,  Checkbox, Textarea} from 'react-form';
import app from '../utils/signup-api';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      first: "",
      last: "",
      email: "",
      pssretype:"",
      professional:"",
      personal:""
    };
    this.toggle = this.toggle.bind(this);
    this.buildAModalForForm = this.buildAModalForForm.bind(this);
  }
  toggle() {
   this.setState({
     modal: !this.state.modal
   });
 }
 createUser(values){
   if(values.psswrd === values.psswrd_rpt){
     let fname = this.state.first;
     let role;
     fname = fname.substring(0,1) + this.state.last;
     fname = fname.toLowerCase();
      if(this.state.professional){
        role = 'professional';
      }else if(this.state.personal){
        role = 'personal';
      }
      this.toggle();
      app.userData(this.state.first, this.state.last, fname, fname, values.locale, this.state.email, values.psswrd, role, values.story).then((data)=>{
        console.log(data);
      });
   }else{
     this.setState({pssretype:'Passwords are not the same.'});
   }
 }
  buildAModalForForm(){
      if(this.state.professional){
          return(
              <Modal isOpen={this.state.modal} toggle={this.toggle} className="signUpModal">
              <ModalHeader toggle={this.toggle}>Tell us about your business.</ModalHeader>
              <ModalBody>
                {this.businessFormBuilder()}
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
        )
      }else if(this.state.personal){
          return(
            <Modal isOpen={this.state.modal} toggle={this.toggle} className="signUpModal">
            <ModalHeader toggle={this.toggle}>Tell us about yourself.</ModalHeader>
            <ModalBody>
              {this.personalFormBuilder()}
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
          )
      }
  }
  personalFormBuilder(){
      return(
        <div className="personal-form">
        <Form  onSubmit={(values) => {
            this.createUserName();
          }}
        >
          {({submitForm}) => {
            return (
              <div className="business-form">
              <Form
               onSubmit={(values) => {
                  this.createUser(values);
                }}
              >
                {({submitForm}) => {
                  return (
                      <form onSubmit={submitForm} className="form-modal">
                        <p>Hello {this.state.first},  we are going to need some more information from you to create your account.</p>
                        <p>Please fill out more details about your user profile.</p>
                        <Text field='psswrd' placeholder='Create a password'/>
                        <Text field='psswrd_rpt' placeholder='Retype password'/>
                        <p className="color-red">{this.state.pssretype}</p>
                        <Text field='locale' placeholder='City, State'/>
                        <Text field="category" placeholder='List type of cuisines. i.e. Italian, fine dining, farm to table'/>
                        <p>Please tell us business' story</p>
                        <Textarea field="story"/>
                        <Button type="submit" color="primary">Create</Button>{' '}
                        <p className="color-green">{this.state.success}</p>
                      </form>
                    )
                  }}
                </Form>
            </div>
            )
          }}
        </Form>
          </div>
      )
  }
  businessFormBuilder(){
    return(
      <div className="business-form">
      <Form
       onSubmit={(values) => {
          this.createUser(values);

        }}
      >
        {({submitForm}) => {
          return (
              <form onSubmit={submitForm} className="form-modal">
                <p>Hello {this.state.first},  we are going to need some more information from you to create your account.</p>
                <p>Please fill out more details about your user profile.</p>
                <Text field='psswrd' placeholder='Create a password'/>
                <Text field='psswrd_rpt' placeholder='Retype password'/>
                <p className="color-red">{this.state.pssretype}</p>
                <Text field='locale' placeholder='City, State'/>
                <Text field="category" placeholder='List type of cuisines. i.e. Italian, fine dining, farm to table'/>
                <p>Please tell us business' story</p>
                <Textarea field="story"/>
                <Button type="submit" color="primary">Create</Button>{' '}
              </form>
            )
          }}
        </Form>
    </div>
    )
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <p>Spicy jalapeno bacon ipsum dolor amet culpa laborum spare ribs bresaola, alcatra filet mignon kevin nulla chuck veniam. Anim sint dolore ribeye shank, veniam excepteur aliquip sed kielbasa proident.</p>
            <p>Occaecat kevin swine filet mignon, eu tongue deserunt. Ut short loin aliqua do incididunt brisket. Tempor lorem pork chop laborum leberkas short loin, strip steak cupim ham beef ribs shankle. In jowl bresaola, do est officia picanha. Sint swine adipisicing ut spare ribs doner pariatur.</p>
            <p>Occaecat kevin swine filet mignon, eu tongue deserunt. Ut short loin aliqua do incididunt brisket.</p>
            <p>Occaecat kevin swine filet mignon, eu tongue deserunt. Ut short loin aliqua do incididunt brisket.</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <Form  onSubmit={(values) => {

              this.setState(values);

            }}
          >
            {({submitForm}) => {
              return (
                <form onSubmit={submitForm}>
                <p>Get to know the people who know your food.</p>
                  <small className="form-text text-muted">Get started for free today!</small>
                  <Text field='first' placeholder='First Name' />
                  <Text field='last' placeholder='Last Name'/>
                  <Text field='email' placeholder='Email'/>
                  <label>
                    <Checkbox field='professional' className="form-check"/>
                    <span>Professional</span>
                  </label>
                  <label>
                    <Checkbox field='personal' className="form-check"/>
                    <span>Personal</span>
                  </label><br/>
                  <Button type="submit" color="warning" onClick={this.toggle} disabled={false}>Join Now!</Button>
                  {this.buildAModalForForm()}
                </form>
              )
            }}
          </Form>
          </div>
        </div>
      </div>

    )}


}
export default SignUpForm;
