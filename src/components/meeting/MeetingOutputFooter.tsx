import React from 'react'
import { SECTION_FOOTER_MIN_HEIGHT } from '../../constants'
import cn from '../../utils/cn'
import { IEntity, useEntities } from '../entities/EntitiesProvider'
import { filterEntities } from './utils'

export type MeetingOutputFooterSections = 'notes' | 'nextSteps'

function FooterButton({
  isActive,
  children,
  onClick,
}: {
  isActive: boolean
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <div
      onClick={onClick}
      className={cn({
        'flex items-center justify-center cursor-pointer border-t-4 px-4': true,
        'border-gray-300 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500': !isActive,
        'border-indigo-400': isActive,
      })}
      style={{
        height: '100%',
      }}
    >
      {children}
    </div>
  )
}

export default function MeetingOutputFooter({
  activeSection,
  onSectionChange,
}: {
  activeSection: MeetingOutputFooterSections
  onSectionChange: (section: MeetingOutputFooterSections) => void
}) {
  const { items } = useEntities()
  const count = (items: IEntity[], section: MeetingOutputFooterSections) =>
    filterEntities(items, section).length
  const countChecked = (items: IEntity[]) =>
    filterEntities(items, MeetingOutputFooterSections.NextSteps).filter(
      (i) => i.output?.type === 'NEXT_STEP' && i.output.checked
    ).length
  return (
    <div
      className="flex items-center relative bg-white dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700"
      style={{ height: SECTION_FOOTER_MIN_HEIGHT }}
    >
      <FooterButton
        isActive={activeSection === MeetingOutputFooterSections.Notes}
        onClick={() => onSectionChange(MeetingOutputFooterSections.Notes)}
      >
        Notes ({count(items, MeetingOutputFooterSections.Notes)})
      </FooterButton>
      <FooterButton
        isActive={activeSection === MeetingOutputFooterSections.NextSteps}
        onClick={() => onSectionChange(MeetingOutputFooterSections.NextSteps)}
      >
        Next steps ({countChecked(items)}/
        {count(items, MeetingOutputFooterSections.NextSteps)})
      </FooterButton>
    </div>
  )
}
