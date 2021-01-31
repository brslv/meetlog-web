import { EntityOutputType, IEntity } from '../entities/Entity'
import { MeetingOutputFooterSections } from './MeetingOutputFooter'

export const filterEntities = (
  items: IEntity[],
  activeSection: MeetingOutputFooterSections
) => {
  const map = {
    [EntityOutputType.Note]: MeetingOutputFooterSections.Notes,
    [EntityOutputType.NextStep]: MeetingOutputFooterSections.NextSteps,
  }
  return items.filter((item) => {
    if (!item.output) return null
    return map[item.output.type] === activeSection
  })
}
