import Textarea from './core/Textarea'
import { MEETING_INPUT_TEXT_AREA_MAX_ROWS } from '../constants'

export default function MeetingInputField() {
  return (
    <Textarea
      style={{ resize: 'none' }}
      rows={1}
      maxRows={MEETING_INPUT_TEXT_AREA_MAX_ROWS}
    />
  )
}
