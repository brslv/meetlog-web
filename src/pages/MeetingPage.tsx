import Page from '../components/core/Page'
import SideNav, { SideNavPusher } from '../components/SideNav'
import React from 'react'
import MeetingInput from '../components/MeetingInput'
import MeetingOutput from '../components/MeetingOutput'

export default function MeetingPage() {
  return (
    <Page>
      <SideNav />
      <SideNavPusher>
        <div className="h-screen grid grid-cols-2">
          <MeetingInput />
          <MeetingOutput />
        </div>
      </SideNavPusher>
    </Page>
  )
}
