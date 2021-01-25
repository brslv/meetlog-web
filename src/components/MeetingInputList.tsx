import { Container } from './core/Container'

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
    <Container>
      <div className="flex flex-col justify-end">
        {inputs.map((input) => {
          return (
            <div
              key={input.id}
              className="p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 mt-4 rounded"
            >
              {input.text}
            </div>
          )
        })}
      </div>
    </Container>
  )
}
