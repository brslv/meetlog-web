import Agenda from './Agenda'
import MeetingInputList from './MeetingInputList'
import MeetingInputField from './MeetingInputField'
import React, { useState } from 'react'
import { Container } from './core/Container'
import Title from './core/Title'

export default function MeetingInput() {
  const [inputs] = useState([
    { id: 1, text: 'Lorem ipsum dolor sit amet' },
    { id: 2, text: 'Lorem ipsum dolor sit amet' },
    { id: 3, text: 'Lorem ipsum dolor sit amet' },
  ])

  return (
    <div className="flex flex-col relative border-r border-gray-300 dark:border-gray-700">
      <div className="bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
        <Container>
          <div className="flex justify-between items-center">
            <Title bg pushBottom={false}>
              Input
            </Title>
            <Agenda />
          </div>
        </Container>
      </div>
      <div className="relative flex-1 flex justify-end flex-col">
        <MeetingInputList inputs={inputs} />
      </div>
      <div>
        <MeetingInputField />
      </div>
    </div>
  )
}
