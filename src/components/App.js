import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { useEffect } from 'react'
import Dashboard from './Dashboard'
import Nav from './Nav'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddPoll from './AddPoll'
import Leaderboard from './Leaderboard'
import Poll from './Poll'

export default function App() {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.authedUser === null)

  useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])

  return (
    <Router>
      <div className="container">
        <Nav />
        {loading ? null : (
          <div>
            <Route path="/" exact>
              <Dashboard />
            </Route>
            <Route path="/leaderboard">
              <Leaderboard />
            </Route>
            <Route path="/polls/:id">
              <Poll />
            </Route>
            <Route path="/add">
              <AddPoll />
            </Route>
          </div>
        )}
      </div>
    </Router>
  )
}
