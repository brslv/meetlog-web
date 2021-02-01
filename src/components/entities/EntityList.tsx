import { ENTITY_LIST_MIN_HEIGHT } from '../../constants'
import Entity, { IContextMenuRenderFn } from './Entity'
import React from 'react'
import { IEntity } from './EntitiesProvider'

export default function EntityList({
  entities,
  contextMenu,
}: {
  entities: IEntity[]
  contextMenu: IContextMenuRenderFn
}) {
  return (
    <div className="flex flex-col justify-end">
      <div className="flex flex-col overflow-hidden">
        <div
          className="flex flex-col-reverse overflow-auto p-4"
          style={{ minHeight: ENTITY_LIST_MIN_HEIGHT }}
        >
          {entities.map((input) => (
            <Entity key={input.id} data={input} contextMenu={contextMenu} />
          ))}
        </div>
      </div>
    </div>
  )
}
