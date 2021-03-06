/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'
import Markdown from './Markdown'

const Answer = ({ answer }) => (
  <label>
    <input name="answer" value={answer} type="radio" />
    <Markdown source={answer} />
  </label>
)

export default Answer
