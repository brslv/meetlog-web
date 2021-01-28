import { Container } from './core/Container'
import Entity, { IEntity } from './Entity'

export default function MeetingOutputList({ outputs }: { outputs: IEntity[] }) {
  return (
    <Container>
      <div className="flex flex-col justify-end">
        {outputs.map((output, i) => {
          return (
            <Entity
              key={output.id}
              data={output}
              isLast={i === outputs.length - 1}
            />
            // <div
            //   key={output.id}
            //   className="border border-gray-300 dark:border-gray-700 mt-4 rounded overflow-hidden"
            // >
            //   <div className="p-4 bg-white dark:bg-gray-800">{output.text}</div>
            // </div>
          )
        })}
      </div>
    </Container>
  )
}
