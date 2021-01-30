import Page from '../components/core/Page'
import SideNav, { SideNavPusher } from '../components/SideNav'
import React from 'react'
import Input from '../components/meeting/Input'
import Output from '../components/meeting/Output'

export default function MeetingPage() {
  return (
    <Page>
      <SideNav />
      <SideNavPusher>
        <div className="h-screen grid grid-cols-2">
          <Input />
          <Output />
        </div>
      </SideNavPusher>
    </Page>
  )
}
