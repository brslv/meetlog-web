import { Container } from './core/Container'
import Title from './core/Title'
import React, { useState } from 'react'
import Button, { ButtonSize } from './core/Button'
import MeetingOutputList from './MeetingOutputList'

export default function MeetingOutput() {
  const [outputs] = useState([
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

            <Button size={ButtonSize.Sm}>Notes</Button>
          </div>
        </Container>
      </div>
      <div className="relative flex-1 flex justify-start flex-col">
        <MeetingOutputList outputs={outputs} />
      </div>
    </div>
  )
}
