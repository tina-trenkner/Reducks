import React from 'react'
import quizapi from './quizapi'
import Header from './Header.jsx'
import Quizzcomponent from './Quizzcomponent.jsx'

export default React.createClass({
  render() {
    return (
      <div className="mainWrapper">
        <Header/>
        <Quizzcomponent/>
      </div>
    )
  }
})
