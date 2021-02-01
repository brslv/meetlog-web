import { MeetingOutputFooterSections } from './MeetingOutputFooter'
import { EntityOutputType, IEntity } from '../entities/EntitiesProvider'

export const filterEntities = (
  items: IEntity[],
  activeSection: MeetingOutputFooterSections
) => {
  const map: { [key in EntityOutputType]: MeetingOutputFooterSections } = {
    NOTE: MeetingOutputFooterSections.Notes,
    NEXT_STEP: MeetingOutputFooterSections.NextSteps,
  }
  return items.filter((item) => {
    if (!item.output) return null
    return map[item.output.type] === activeSection
  })
}
