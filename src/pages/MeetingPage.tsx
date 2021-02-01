import Page from '../components/core/Page'
import SideNav, { SideNavPusher } from '../components/SideNav'
import React from 'react'
import Input from '../components/meeting/Input'
import Output from '../components/meeting/Output'
import { useEntities } from '../components/entities/EntitiesProvider'

export default function MeetingPage() {
  const { items, addItem } = useEntities()

  return (
    <Page>
      <SideNav />
      <SideNavPusher>
        <div className="h-screen grid grid-cols-2">
          <Input items={items} onAdd={addItem} />
          <Output items={items} />
        </div>
      </SideNavPusher>
    </Page>
  )
}
