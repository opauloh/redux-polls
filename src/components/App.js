import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { useEffect } from 'react'
import Dashboard from './Dashboard'
import { BrowserRouter as Router } from 'react-router-dom'

export default function App() {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.authedUser === null)

  useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])

  const store = useSelector((store) => store)
  console.log('store', store)
  return (
    <Router>
      <div className="container">{loading ? null : <Dashboard />}</div>
    </Router>
  )
}
