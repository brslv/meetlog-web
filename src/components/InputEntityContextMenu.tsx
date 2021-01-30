import Title from './core/Title'
import { DeleteIcon, NoteIcon, TaskIcon } from '../toolkit'
import React from 'react'

export default function InputEntityContextMenu() {
  return (
    <div>
      <Title>Convert to</Title>
      <div className="mb-2 px-4 py-2 cursor-pointer bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded w-52">
        <div className="flex justify-between items-center">
          <span>Note</span>
          <div>
            <NoteIcon />
          </div>
        </div>
      </div>
      <div className="mb-2 px-4 py-2 cursor-pointer bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded w-52">
        <div className="flex justify-between items-center">
          <span>Next step</span>
          <div>
            <TaskIcon />
          </div>
        </div>
      </div>
      <div className="px-4 py-2 cursor-pointer bg-red-100 dark:bg-red-500 hover:bg-red-200 hover:dark:bg-red-600 rounded w-52">
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
