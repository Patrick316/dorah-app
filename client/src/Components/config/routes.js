import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

//Routes
import Home from '../main/Home.js';
import ProfileBusiness from '../main/pages/ProfileChildBusiness';
import ProfilePersonal from '../main/pages/ProfileChildPersonal'
import Category from '../main/pages/CategoryChild';

 const dorahRoutes = () => (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user/:profile/:id" component={personalId}/>
        <Route path="/category/:id" component={categoryId}/>
        <Route path="/:type/:id" component={businessId}/>

      </Switch>
  </Router>

);

const businessId = ({ match }) =>
(
  <div>
    <ProfileBusiness type = {match.params.type} id={match.params.id}/>
  </div>
)
const personalId = ({ match }) =>
(
  <div>
    <ProfilePersonal type={match.params.profile} id={match.params.id}/>
  </div>
)

const categoryId = ({ match }) => (
  <div>
    <Category id={match.params.id}/>
  </div>
)


export default dorahRoutes
