import Input from './core/Input'

export default function MeetingInput() {
  return (
    <div className="relative w-full">
      <div className="w-full">
        <div className="border-t border-gray-300 bg-white p-4">
          <Input type="text" />
        </div>
      </div>
    </div>
  )
}
