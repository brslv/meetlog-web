import Textarea from '../core/Textarea'
import {
  MEETING_INPUT_TEXT_AREA_MAX_ROWS,
  SECTION_FOOTER_MIN_HEIGHT,
} from '../../constants'
import React, { useState } from 'react'

export default function MeetingInputFooter({
  onSubmitInput,
}: {
  onSubmitInput: (text: string) => void
}) {
  const [value, setValue] = useState('')

  const onKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      setValue('')
      onSubmitInput(value)
    }
  }

  return (
    <div
      className="border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-4"
      style={{ minHeight: SECTION_FOOTER_MIN_HEIGHT }}
    >
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ resize: 'none' }}
        rows={1}
        maxRows={MEETING_INPUT_TEXT_AREA_MAX_ROWS}
        onKeyUp={onKeyUp}
      />
    </div>
  )
}
