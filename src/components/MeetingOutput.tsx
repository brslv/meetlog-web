import { Container } from './core/Container'
import Agenda from './Agenda'
import Title from './core/Title'
import MeetingInputList from './MeetingInputList'
import React, { useState } from 'react'

export default function MeetingOutput() {
  const [inputs] = useState([
    { id: 1, text: 'Lorem ipsum dolor sit amet' },
    { id: 2, text: 'Lorem ipsum dolor sit amet' },
    { id: 3, text: 'Lorem ipsum dolor sit amet' },
  ])

  return (
    <div className="flex flex-col relative border-r border-gray-300 dark:border-gray-700">
      <div className="bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
        <Container>
          <Title pushBottom={false}>Output</Title>
        </Container>
      </div>

      <div className="bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
        <Container>
          <Agenda />
        </Container>
      </div>
      <div className="relative flex-1 flex justify-end flex-col">
        <MeetingInputList inputs={inputs} />
      </div>
    </div>
  )
}
