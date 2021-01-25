import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import MeetingPage from './pages/MeetingPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/d">
          <DashboardPage />
        </Route>
        <Route path="/m/:id">
          <MeetingPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Redirect to="/d" />
      </Switch>
    </Router>
  )
}

export default App
