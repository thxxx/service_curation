/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
// pages for this product
import NavBar from "./views/NavBar/NavBar"
import LandingPage from "./views/LandingPage/LandingPage.js"
import LandingPage2 from "./views/LandingPage/LandingPage2.js"
import UploadPage from "./views/UploadPage/UploadPage"
import Footer from "./views/Footer/Footer"
import AllServicePage from "./views/ServicesPage/AllServicePage"
import Feedback from './views/Feedback/Feedback'
import './App.scss'

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
        <Router>
          <NavBar />
      <div className="Container" style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)', zIndex:-1 }}>
          <br/>
          <br/>
          <Route exact path="/" component={ LandingPage2 } />
          <Route exact path="/upload" component={ UploadPage } />
          <Route exact path="/all" component={ AllServicePage } />
          <Route exact path="/feedback" component={ Feedback } />
      <Footer />
      </div>
        </Router>
    </Suspense>
  );
}

export default App;
