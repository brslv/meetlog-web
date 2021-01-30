import Page from '../components/core/Page'
import SideNav, { SideNavPusher } from '../components/SideNav'
import React from 'react'
import MeetingSection from '../components/MeetingSection'
import Agenda from '../components/Agenda'
import MeetingInputFooter from '../components/MeetingInputFooter'
import MeetingOutputFooter from '../components/MeetingOutputFooter'
import InputEntityContextMenu from '../components/InputEntityContextMenu'
import OutputEntityContextMenu from '../components/OutputEntityContextMenu'
import { useEntities } from '../components/EntitiesProvider'

export default function MeetingPage() {
  const { items, addItem } = useEntities()

  return (
    <Page>
      <SideNav />
      <SideNavPusher>
        <div className="h-screen grid grid-cols-2">
          <MeetingSection
            headerRight={<Agenda />}
            footer={<MeetingInputFooter onSubmitInput={addItem} />}
            title="Input"
            entities={items}
            entityContextMenu={<InputEntityContextMenu />}
          />
          <MeetingSection
            title="Output"
            entities={items.filter((item) => item.output !== null)}
            footer={<MeetingOutputFooter />}
            entityContextMenu={<OutputEntityContextMenu />}
          />
        </div>
      </SideNavPusher>
    </Page>
  )
}
