import EntityList from './EntityList'
import React from 'react'
import Title from './core/Title'
import { MEETING_INPUT_HEADING_SECTION_HEIGHT } from '../constants'
import { IEntity } from './Entity'

export default function MeetingSection({
  title,
  entities,
  headerRight,
  footer,
  entityContextMenu,
}: {
  title: string
  entities: IEntity[]
  headerRight?: React.ReactNode
  footer?: React.ReactNode
  entityContextMenu: React.ReactNode
}) {
  return (
    <div
      style={{
        gridTemplateRows: `${MEETING_INPUT_HEADING_SECTION_HEIGHT}px 1fr auto`,
      }}
      className="h-screen relative grid border-r border-gray-300 dark:border-gray-700"
    >
      <div className="bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
        <div className="py-2.5 px-4">
          <div className="flex justify-between items-center">
            <Title bg pushBottom={false}>
              {title}
            </Title>
            {headerRight ? headerRight : null}
          </div>
        </div>
      </div>

      <div className="relative flex flex-col-reverse overflow-auto no-scrollbar">
        <EntityList entities={entities} contextMenu={entityContextMenu} />
      </div>

      <div>{footer}</div>
    </div>
  )
}
