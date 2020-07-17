import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
import { createStore } from 'redux';
import { Provider } from "react-redux";
import reducer from "./reducers";
import LoadingBar from "react-redux-loading";
import middleware from "./middleware";

function ColorfulBorder() {
  return (
    <React.Fragment>
      <ul className='border-container'>
        <li className='border-item' style={{ background: 'var(--red)' }} />
        <li className='border-item' style={{ background: 'var(--blue)' }} />
        <li className='border-item' style={{ background: 'var(--pink)' }} />
        <li className='border-item' style={{ background: 'var(--yellow)' }} />
        <li className='border-item' style={{ background: 'var(--aqua)' }} />
      </ul>
    </React.Fragment>
  )
}

const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <ColorfulBorder />
    <LoadingBar />
    <App />
  </Provider>,
  document.getElementById('root')
)