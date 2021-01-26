import { Container } from './core/Container'
import Title from './core/Title'
import MeetingInputList from './MeetingInputList'
import React, { useState } from 'react'
import Button, { ButtonSize } from './core/Button'

export default function MeetingOutput() {
  const [inputs] = useState([
    { id: 1, text: 'Lorem ipsum dolor sit amet' },
    { id: 2, text: 'Lorem ipsum dolor sit amet' },
    { id: 3, text: 'Lorem ipsum dolor sit amet' },
  ])

  return (
    <div className="flex flex-col relative">
      <div className="bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
        <Container>
          <div className="flex justify-between items-center">
            <Title bg pushBottom={false}>
              Output
            </Title>

            <Button size={ButtonSize.sm}>Notes</Button>
          </div>
        </Container>
      </div>
      <div className="relative flex-1 flex justify-start flex-col">
        <MeetingInputList inputs={inputs} />
      </div>
    </div>
  )
}
