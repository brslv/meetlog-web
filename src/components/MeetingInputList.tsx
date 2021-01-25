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
              className="p-4 bg-white border border-gray-300 mt-4 rounded"
            >
              {input.text}
            </div>
          )
        })}
      </div>
    </Container>
  )
}
