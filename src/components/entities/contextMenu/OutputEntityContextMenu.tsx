import Title from '../../core/Title'
import { DeleteIcon } from '../../../toolkit'
import React from 'react'
import { EntityOutputType, IEntity, useEntities } from '../EntitiesProvider'
import { clickContextItem } from './utils'

const typeToName = (type: EntityOutputType | undefined): string => {
  if (!type) return 'unknown'
  return {
    NOTE: 'notes',
    NEXT_STEP: 'next steps',
  }[type]
}

export default function OutputEntityContextMenu({
  entity,
  options,
}: {
  entity: IEntity
  options: { closeContextMenu: () => void }
}) {
  const { removeFromOutput } = useEntities()
  return (
    <div>
      <Title>Actions</Title>
      <div
        onClick={clickContextItem(() => removeFromOutput(entity.id), options)}
        className="px-4 py-2 cursor-pointer bg-red-100 dark:bg-red-500 hover:bg-red-200 hover:dark:bg-red-600 rounded"
      >
        <div className="flex justify-between items-center">
          <span className="mr-4">
            Delete from {typeToName(entity.output?.type)}
          </span>
          <div>
            <DeleteIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
