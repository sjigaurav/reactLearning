import React from 'react';
//import logo from './logo.svg';
import image from './myLogo.jpg'
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import WithAndWitoutJsx from './components/WithAndWithoutJsx';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyle.css'
import style from './appStyle.module.css'
import Form from './components/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";  //For installing router cmnd = npm install react-router-dom
import About from './components/About';
import Users from './components/Users';
import Home from './components/Home';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import PortalDemo from './components/PortalDemo';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <img src={image} className="App-logo" alt="logo" />
          <div className="header-right">
            <div className="header-right">
              <a href="/">Home</a>
              <a href="/users" target="_blank">Users</a>
              <a href="/about" target="_blank">About</a>
            </div>
          </div>
        </header>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
     
      <Greet name="Gaurav" heroName="SuperHero">
        <p>This is childern of greet</p>
      </Greet>
      <Welcome status="Welcome" name="Gaurav" heroName="SpiderMan"/>  
      <Welcome name="Second Welcome"/>
      <WithAndWitoutJsx/>
      <Counter/>
      <Message/>
      <FunctionClick/>
      <ClassClick/>
      <EventBind/>
      <ParentComponent/>
      <UserGreeting/>
      <NameList/>
      <Stylesheet primary={false}/>
      <Inline/>
      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className={style.success}>Success</h1> */}
      <Form/>
      

    <LifeCycleA/>
    <FragmentDemo/>
    <PortalDemo/>
  </div>

   
  );
}

export default App;
