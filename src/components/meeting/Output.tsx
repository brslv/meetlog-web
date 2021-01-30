import MeetingSection from './MeetingSection'
import MeetingOutputFooter, {
  MeetingOutputFooterSections,
} from './MeetingOutputFooter'
import OutputEntityContextMenu from '../entities/contextMenu/OutputEntityContextMenu'
import React, { useState } from 'react'
import { useEntities } from '../entities/EntitiesProvider'
import { EntityOutputType, IEntity } from '../entities/Entity'

export default function Output() {
  const { items } = useEntities()
  const [activeSection, setActiveSection] = useState(
    MeetingOutputFooterSections.Notes
  )

  const filter = (
    items: IEntity[],
    activeSection: MeetingOutputFooterSections
  ) => {
    const map = {
      [EntityOutputType.Note]: MeetingOutputFooterSections.Notes,
      [EntityOutputType.NextStep]: MeetingOutputFooterSections.NextSteps,
    }
    return items.filter((item) => {
      if (!item.output) return null
      return map[item.output.type] === activeSection
    })
  }

  return (
    <MeetingSection
      title="Output"
      entities={filter(items, activeSection)}
      footer={
        <MeetingOutputFooter
          activeSection={activeSection}
          onSectionChange={(section) => setActiveSection(section)}
        />
      }
      contextMenu={(entity) => <OutputEntityContextMenu entity={entity} />}
    />
  )
}
