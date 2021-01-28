import Title from './core/Title'
import React, { useState } from 'react'
import Button from './core/Button'
import MeetingOutputList from './MeetingOutputList'
import Stats from './Stats'
import { IEntity } from './Entity'

export default function MeetingOutput() {
  const [outputs] = useState<IEntity[]>([
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet',
      author: {
        name: 'Dave',
        avatar: {
          src: 'https://randomuser.me/api/portraits/lego/4.jpg',
        },
      },
      output: null,
    },
  ])

  return (
    <div className="flex flex-col relative">
      <div className="bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
        <div className="px-4 py-2.5">
          <div className="flex justify-between items-center">
            <Title bg pushBottom={false}>
              Output
            </Title>

            <Button>Notes</Button>
          </div>
        </div>
      </div>
      <div className="relative flex-1 flex justify-start flex-col">
        <MeetingOutputList outputs={outputs} />
      </div>
      <div className="fixed bottom-0 right-0 mr-4 mb-4">
        <Stats />
      </div>
    </div>
  )
}
