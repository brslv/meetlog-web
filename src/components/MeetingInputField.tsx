import Input from './core/Input'

export default function MeetingInputField() {
  return (
    <div className="relative w-full h-full">
      <div className="h-full border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
        <Input type="text" />
      </div>
    </div>
  )
}
