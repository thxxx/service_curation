/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
// pages for this product
import NavBar from "./views/NavBar/NavBar"
import LandingPage from "./views/LandingPage/LandingPage.js"
import UploadPage from "./views/UploadPage/UploadPage"
import Footer from "./views/Footer/Footer"

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
        <Router>
          <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
          <br/>
          <br/>
          <Route exact path="/" component={ LandingPage } />
          <Route exact path="/uploads" component={ UploadPage } />
      </div>
        </Router>
      <Footer />
    </Suspense>
  );
}

export default App;
