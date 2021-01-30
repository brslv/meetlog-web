import Title from '../../core/Title'
import { DeleteIcon } from '../../../toolkit'
import React from 'react'
import { EntityOutputType, IEntity } from '../Entity'
import { useEntities } from '../EntitiesProvider'

const typeToName = (type: EntityOutputType | undefined) => {
  if (!type) return 'unknown'
  return {
    [EntityOutputType.Note]: 'notes',
    [EntityOutputType.NextStep]: 'next steps',
  }[type]
}

export default function OutputEntityContextMenu({
  entity,
}: {
  entity: IEntity
}) {
  const { removeFromOutput } = useEntities()
  return (
    <div>
      <Title>Actions</Title>
      <div
        onClick={() => removeFromOutput(entity.id)}
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
