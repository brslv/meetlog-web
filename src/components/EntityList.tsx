import { ENTITY_LIST_MIN_HEIGHT } from '../constants'
import Entity, { IEntity } from './Entity'
import React from 'react'

export default function EntityList({
  entities,
  contextMenu,
}: {
  entities: IEntity[]
  contextMenu: React.ReactNode
}) {
  return (
    <div className="flex flex-col justify-end">
      <div className="flex flex-col overflow-hidden">
        <div
          className="flex flex-col-reverse overflow-auto p-4"
          style={{ minHeight: ENTITY_LIST_MIN_HEIGHT }}
        >
          {entities.map((input, i) => (
            <Entity
              key={input.id}
              data={input}
              isLast={
                i === 0 /*because we use row-reverse, the last is with idx 0*/
              }
              contextMenu={contextMenu}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
