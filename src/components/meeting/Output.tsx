import MeetingSection from './MeetingSection'
import MeetingOutputFooter, {
  MeetingOutputFooterSections,
} from './MeetingOutputFooter'
import OutputEntityContextMenu from '../entities/contextMenu/OutputEntityContextMenu'
import React, { useState } from 'react'
import { useEntities } from '../entities/EntitiesProvider'
import { filterEntities } from './utils'

export default function Output() {
  const { items } = useEntities()
  const [activeSection, setActiveSection] = useState(
    MeetingOutputFooterSections.Notes
  )

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
