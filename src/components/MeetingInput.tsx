import Input from './core/Input'

export default function MeetingInput() {
  return (
    <div className="relative w-full">
      <div className="w-full">
        <div className="border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
          <Input type="text" />
        </div>
      </div>
    </div>
  )
}
