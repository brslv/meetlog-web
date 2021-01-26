import Page from '../components/core/Page'
import SideNav, { SideNavPusher } from '../components/SideNav'
import Title from '../components/core/Title'
import { Container } from '../components/core/Container'
import MeetingOutputList from '../components/MeetingOutputList'
import React from 'react'
import MeetingInput from '../components/MeetingInput'

export default function MeetingPage() {
  return (
    <Page>
      <SideNav />
      <SideNavPusher>
        <div className="h-screen grid grid-cols-2">
          <MeetingInput />
          <div>
            <Container>
              <Title bg>Output</Title>
              <MeetingOutputList />
            </Container>
          </div>
        </div>
      </SideNavPusher>
    </Page>
  )
}
