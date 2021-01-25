import Page from '../components/core/Page'
import SideNav, { SideNavPusher } from '../components/SideNav'
import Title from '../components/core/Title'
import { Container } from '../components/core/Container'
import Agenda from '../components/Agenda'
import MeetingInput from '../components/MeetingInput'
import MeetingInputList from '../components/MeetingInputList'
import { useState } from 'react'

export default function MeetingPage() {
  const [inputs] = useState([
    { id: 1, text: 'Lorem ipsum dolor sit amet' },
    { id: 2, text: 'Lorem ipsum dolor sit amet' },
    { id: 3, text: 'Lorem ipsum dolor sit amet' },
  ])

  return (
    <Page>
      <SideNav />
      <SideNavPusher>
        <div className="h-screen grid grid-cols-2">
          <div className="flex flex-col relative border-r border-gray-300 dark:border-gray-700">
            <div>
              <Agenda />
            </div>
            <div className="flex-1 flex justify-end flex-col">
              <MeetingInputList inputs={inputs} />
            </div>
            <div>
              <MeetingInput />
            </div>
          </div>
          <div>
            <Container>
              <Title bg>Output</Title>
            </Container>
          </div>
        </div>
      </SideNavPusher>
    </Page>
  )
}
