import MeetingSection from './MeetingSection'
import Agenda from '../Agenda'
import MeetingInputFooter from './MeetingInputFooter'
import InputEntityContextMenu from '../entities/contextMenu/InputEntityContextMenu'
import React from 'react'
import { IEntity } from '../entities/EntitiesProvider'

export default function Input({
  items,
  onAdd,
}: {
  items: IEntity[]
  onAdd: (text: string) => void
}) {
  return (
    <MeetingSection
      headerRight={<Agenda />}
      footer={<MeetingInputFooter onSubmitInput={onAdd} />}
      title="Input"
      entities={items}
      contextMenu={(entity, options) => (
        <InputEntityContextMenu entity={entity} options={options} />
      )}
    />
  )
}
