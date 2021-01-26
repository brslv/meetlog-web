import { Container } from './core/Container'
import Button, { ButtonSize } from './core/Button'
import {
  MEETING_INPUT_FIELD_SECTION_HEIGHT,
  MEETING_INPUT_HEADING_SECTION_HEIGHT,
} from '../constants'

interface MeetingInput {
  id: number
  text: string
}

export default function MeetingInputList({
  inputs,
}: {
  inputs: MeetingInput[]
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
          {inputs.map((input) => {
            return (
              <div
                key={input.id}
                className="border border-gray-300 dark:border-gray-700 mt-4 rounded overflow-hidden"
              >
                <div className="p-4 bg-white dark:bg-gray-800">
                  {input.text}
                </div>
                <div className="flex items-center px-4 p-2.5 bg-white dark:bg-gray-800 border-t border:gray-100 dark:border-gray-700">
                  <Button size={ButtonSize.sm} className="mr-2">
                    To note
                  </Button>
                  <Button size={ButtonSize.sm}>To next step</Button>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}
