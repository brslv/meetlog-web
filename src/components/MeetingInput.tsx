import Agenda from './Agenda'
import MeetingInputList from './MeetingInputList'
import MeetingInputField from './MeetingInputField'
import React, { useState } from 'react'
import { Container } from './core/Container'
import Title from './core/Title'
import {
  MEETING_INPUT_FIELD_SECTION_HEIGHT,
  MEETING_INPUT_HEADING_SECTION_HEIGHT,
} from '../constants'
import { MeetingInputItemType } from './MeetingInputItem'
import { MeetingOutputType } from './MeetingOutput'

export default function MeetingInput() {
  const [inputs] = useState<MeetingInputItemType[]>([
    {
      id: 1,
      author: {
        name: 'Samuel',
        avatar: {
          src: 'https://randomuser.me/api/portraits/lego/1.jpg',
        },
      },
      text: 'Lorem ipsum dolor sit amet',
      output: null,
    },
    {
      id: 2,
      author: {
        name: 'Johan',
        avatar: {
          src: 'https://randomuser.me/api/portraits/lego/2.jpg',
        },
      },
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      output: null,
    },
    {
      id: 3,
      author: {
        name: 'Victor',
        avatar: {
          src: 'https://randomuser.me/api/portraits/lego/3.jpg',
        },
      },
      text: 'Lorem ipsum dolor sit amet',
      output: {
        type: MeetingOutputType.Note,
      },
    },
    {
      id: 4,
      author: {
        name: 'Dave',
        avatar: {
          src: 'https://randomuser.me/api/portraits/lego/4.jpg',
        },
      },
      text: 'Lorem ipsum dolor sit amet',
      output: null,
    },
  ])

  return (
    <div className="flex flex-col relative border-r border-gray-300 dark:border-gray-700">
      <div
        style={{ height: MEETING_INPUT_HEADING_SECTION_HEIGHT }}
        className="bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700"
      >
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
      <div
        className="overflow-hidden"
        style={{ height: MEETING_INPUT_FIELD_SECTION_HEIGHT }}
      >
        <MeetingInputField />
      </div>
    </div>
  )
}
