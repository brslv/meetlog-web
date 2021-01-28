import EntityList from './EntityList'
import React from 'react'
import Title from './core/Title'
import {
  MEETING_INPUT_FIELD_SECTION_HEIGHT,
  MEETING_INPUT_HEADING_SECTION_HEIGHT,
} from '../constants'
import { IEntity } from './Entity'

export default function MeetingSection({
  title,
  entities,
  headerRight,
  footer,
}: {
  title: string
  entities: IEntity[]
  headerRight?: React.ReactNode
  footer?: React.ReactNode
}) {
  return (
    <div className="relative flex flex-col relative border-r border-gray-300 dark:border-gray-700">
      <div
        style={{ height: MEETING_INPUT_HEADING_SECTION_HEIGHT }}
        className="bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700"
      >
        <div className="py-2.5 px-4">
          <div className="flex justify-between items-center">
            <Title bg pushBottom={false}>
              {title}
            </Title>
            {headerRight ? headerRight : null}
          </div>
        </div>
      </div>
      <div className="relative flex-1 justify-self-end flex flex-col-reverse">
        <EntityList entities={entities} />
      </div>
      <div
        className="overflow-hidden"
        style={{ height: MEETING_INPUT_FIELD_SECTION_HEIGHT }}
      >
        <div className="relative w-full h-full">
          <div className="h-full border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
            {footer}
          </div>
        </div>
      </div>
    </div>
  )
}
