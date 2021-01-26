import { Container } from './core/Container'

interface MeetingOutput {
  id: number
  text: string
}

export default function MeetingOutputList({
  outputs,
}: {
  outputs: MeetingOutput[]
}) {
  return (
    <Container>
      <div className="flex flex-col justify-end">
        {outputs.map((output) => {
          return (
            <div
              key={output.id}
              className="border border-gray-300 dark:border-gray-700 mt-4 rounded overflow-hidden"
            >
              <div className="p-4 bg-white dark:bg-gray-800">{output.text}</div>
            </div>
          )
        })}
      </div>
    </Container>
  )
}
