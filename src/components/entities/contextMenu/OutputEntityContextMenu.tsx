import Title from '../../core/Title'
import { DeleteIcon } from '../../../toolkit'
import React from 'react'
import { IEntity } from '../Entity'
import { useEntities } from '../EntitiesProvider'

export default function OutputEntityContextMenu({
  entity,
}: {
  entity: IEntity
}) {
  const { removeItem } = useEntities()
  return (
    <div>
      <Title>Actions</Title>
      <div
        onClick={() => removeItem(entity.id)}
        className="px-4 py-2 cursor-pointer bg-red-100 dark:bg-red-500 hover:bg-red-200 hover:dark:bg-red-600 rounded w-52"
      >
        <div className="flex justify-between items-center">
          <span>Delete</span>
          <div>
            <DeleteIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
