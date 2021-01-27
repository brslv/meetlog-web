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
      className="flex flex-col justify-end"
      style={{
        height: `calc(100vh - ${MEETING_INPUT_HEADING_SECTION_HEIGHT}px - ${MEETING_INPUT_FIELD_SECTION_HEIGHT}px`,
      }}
    >
      <div className="flex flex-col overflow-hidden">
        <div className="flex flex-col-reverse overflow-auto p-4">
          {inputs.map((input, i) => (
            <MeetingInputItem
              key={input.id}
              input={input}
              isLast={
                i === 0 /*because we use row-reverse, the last is with idx 0*/
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}
