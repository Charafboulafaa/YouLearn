import React from 'react'
import Header from './components/Header/Header'
import Main from './pages/Main/Main'
import MyCourses from './pages/MyCourses/MyCourses'
import Learn from './pages/Learn/Learn'
import Footer from './components/Footer/Footer'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/mycourses">
          <MyCourses />
        </Route>
        <Route path="/learn/:courseId">
          <Learn />
        </Route>
      </Switch>

      <Footer />
    </Router>
  )
}
