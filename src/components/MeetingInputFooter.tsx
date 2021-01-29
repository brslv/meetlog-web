import Textarea from './core/Textarea'
import {
  MEETING_INPUT_TEXT_AREA_MAX_ROWS,
  SECTION_FOOTER_MIN_HEIGHT,
} from '../constants'
import React from 'react'

export default function MeetingInputFooter() {
  return (
    <div
      className="border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-4"
      style={{ minHeight: SECTION_FOOTER_MIN_HEIGHT }}
    >
      <Textarea
        style={{ resize: 'none' }}
        rows={1}
        maxRows={MEETING_INPUT_TEXT_AREA_MAX_ROWS}
      />
    </div>
  )
}
