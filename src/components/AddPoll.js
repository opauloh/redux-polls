import React, { useState } from 'react'
import { handleAddPoll } from '../actions/polls'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function AddPoll() {
  const history = useHistory()
  const dispatch = useDispatch()

  const [options, setOptions] = useState({
    a: '',
    b: '',
    c: '',
    d: '',
  })

  const [question, setQuestion] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push('/')
    dispatch(
      handleAddPoll({
        question,
        ...options,
      })
    )
  }

  const handleInputChange = ({ target }) => {
    const { value, name } = target

    setOptions({
      ...options,
      [name]: value,
    })
  }

  const isDisabled = () => {
    return (
      question === '' ||
      options.a === '' ||
      options.b === '' ||
      options.c === '' ||
      options.d === ''
    )
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3 style={{ marginBottom: 5 }}>What is yout question?</h3>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        name="question"
        className="input"
      />
      <h3>What are the options</h3>
      {['a', 'b', 'c', 'd'].map((opt) => (
        <React.Fragment key={opt}>
          <label className="label" htmlFor="input">
            {opt.toUpperCase()}.
          </label>
          <input
            type="text"
            value={options[opt]}
            onChange={handleInputChange}
            name={opt}
            className="input"
          />
        </React.Fragment>
      ))}
      <button className="btn" disabled={isDisabled()}>
        Submit
      </button>
    </form>
  )
}
