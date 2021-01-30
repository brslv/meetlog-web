import Page from '../components/core/Page'
import SideNav, { SideNavPusher } from '../components/SideNav'
import React from 'react'
import MeetingSection from '../components/meeting/MeetingSection'
import Agenda from '../components/Agenda'
import MeetingInputFooter from '../components/meeting/MeetingInputFooter'
import MeetingOutputFooter from '../components/meeting/MeetingOutputFooter'
import InputEntityContextMenu from '../components/entities/contextMenu/InputEntityContextMenu'
import OutputEntityContextMenu from '../components/entities/contextMenu/OutputEntityContextMenu'
import { useEntities } from '../components/entities/EntitiesProvider'

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
            contextMenu={(entity) => <InputEntityContextMenu entity={entity} />}
          />
          <MeetingSection
            title="Output"
            entities={items.filter((item) => item.output !== null)}
            footer={<MeetingOutputFooter />}
            contextMenu={(entity) => (
              <OutputEntityContextMenu entity={entity} />
            )}
          />
        </div>
      </SideNavPusher>
    </Page>
  )
}
