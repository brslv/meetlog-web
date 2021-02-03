import MeetingSection from './MeetingSection'
import MeetingOutputFooter from './MeetingOutputFooter'
import { MeetingOutputFooterSections } from './MeetingOutputFooter'
import OutputEntityContextMenu from '../entities/contextMenu/OutputEntityContextMenu'
import React, { useState } from 'react'
import { IEntity } from '../entities/EntitiesProvider'
import { filterEntities } from './utils'

export default function Output({ items }: { items: IEntity[] }) {
  const [
    activeSection,
    setActiveSection,
  ] = useState<MeetingOutputFooterSections>('NOTE')

  return (
    <MeetingSection
      title="Output"
      entities={filterEntities(items, activeSection)}
      footer={
        <MeetingOutputFooter
          activeSection={activeSection}
          onSectionChange={(section) => setActiveSection(section)}
        />
      }
      contextMenu={(entity, options) => (
        <OutputEntityContextMenu entity={entity} options={options} />
      )}
    />
  )
}
