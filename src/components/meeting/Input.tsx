import MeetingSection from './MeetingSection'
import Agenda from '../Agenda'
import MeetingInputFooter from './MeetingInputFooter'
import InputEntityContextMenu from '../entities/contextMenu/InputEntityContextMenu'
import React from 'react'
import { useEntities } from '../entities/EntitiesProvider'

export default function Input() {
  const { items, addItem } = useEntities()

  return (
    <MeetingSection
      headerRight={<Agenda />}
      footer={<MeetingInputFooter onSubmitInput={addItem} />}
      title="Input"
      entities={items}
      contextMenu={(entity) => <InputEntityContextMenu entity={entity} />}
    />
  )
}
