import { Container } from './core/Container'
import {
  MEETING_INPUT_FIELD_SECTION_HEIGHT,
  MEETING_INPUT_HEADING_SECTION_HEIGHT,
} from '../constants'
import MeetingInputItem, { MeetingInputItemType } from './MeetingInputItem'

export default function MeetingInputList({
  inputs,
}: {
  inputs: MeetingInputItemType[]
}) {
  return (
    <div
      className="overflow-auto"
      style={{
        height: `calc(100vh - ${MEETING_INPUT_HEADING_SECTION_HEIGHT}px - ${MEETING_INPUT_FIELD_SECTION_HEIGHT}px`,
      }}
    >
      <Container>
        <div className="flex flex-col justify-end">
          {inputs.map((input) => (
            <MeetingInputItem input={input} />
          ))}
        </div>
      </Container>
    </div>
  )
}
