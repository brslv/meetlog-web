import Title from '../../core/Title'
import { DeleteIcon, NoteIcon, TaskIcon } from '../../../toolkit'
import React from 'react'
import { IEntity } from '../Entity'
import { useEntities } from '../EntitiesProvider'

export default function InputEntityContextMenu({
  entity,
}: {
  entity: IEntity
}) {
  const { removeItem, convert } = useEntities()

  return (
    <div>
      <Title>Convert to</Title>
      <div
        onClick={() => convert.toNote(entity.id)}
        className="mb-2 px-4 py-2 cursor-pointer bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded w-52"
      >
        <div className="flex justify-between items-center">
          <span>Note</span>
          <div>
            <NoteIcon />
          </div>
        </div>
      </div>
      <div
        onClick={() => convert.toNextStep(entity.id)}
        className="mb-2 px-4 py-2 cursor-pointer bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
      >
        <div className="flex justify-between items-center">
          <span className="mr-4">Next step</span>
          <div>
            <TaskIcon />
          </div>
        </div>
      </div>
      <div
        onClick={() => removeItem(entity.id)}
        className="px-4 py-2 cursor-pointer bg-red-100 dark:bg-red-500 hover:bg-red-200 hover:dark:bg-red-600 rounded"
      >
        <div className="flex justify-between items-center">
          <span className="mr-4">Delete</span>
          <div>
            <DeleteIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
