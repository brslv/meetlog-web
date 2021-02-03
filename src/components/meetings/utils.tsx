import { MeetingOutputFooterSections } from './MeetingOutputFooter'
import { IEntity } from '../entities/EntitiesProvider'

export const filterEntities = (
  items: IEntity[],
  activeSection: MeetingOutputFooterSections
) => {
  return items.filter((item) => {
    if (!item.output) return null
    return item.output.type === activeSection
  })
}
