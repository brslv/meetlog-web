import MeetingSection from './MeetingSection'
import MeetingOutputFooter from './MeetingOutputFooter'
import OutputEntityContextMenu from '../entities/contextMenu/OutputEntityContextMenu'
import React from 'react'
import { useEntities } from '../entities/EntitiesProvider'

export default function Output() {
  const { items } = useEntities()

  return (
    <MeetingSection
      title="Output"
      entities={items.filter((item) => item.output !== null)}
      footer={<MeetingOutputFooter />}
      contextMenu={(entity) => <OutputEntityContextMenu entity={entity} />}
    />
  )
}
