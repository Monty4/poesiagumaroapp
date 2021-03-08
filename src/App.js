import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom";

// Components
import Navbar from './components/Navbar/navbar';
// import Menubar from './components/Menubar/menubar'
import Admin from './components/Admin'
import Home from './components/Home'
import Poems from './components/Poems'
// import Cruzroja from './components/Cruzroja'
// import Emac from './components/Emac'
// import Themes from './components/Themes'
import Footer from './components/Footer/index'

class PoesiagumaroApp extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={ Home } />
            <Route path='/poems' exact component={ Poems } />
            <Route path='/admin' exact component={ Admin } />
            {/* <Route path='/cruzroja' exact component={ Cruzroja } /> */}
            {/* <Route path='/emac' exact component={ Emac } /> */}
            {/* <Route path='/themes' exact component={ Themes } /> */}
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default PoesiagumaroApp