import Label from './core/Label'
import Input from './core/Input'
import Button from './core/Button'
import React, { useState } from 'react'
import Form from './core/Form'

interface FormSubmitData {
  title: string
}

export default function MeetingForm({
  onSubmit,
}: {
  onSubmit: (arg0: FormSubmitData) => void
}) {
  const [title, setTitle] = useState('')
  const _onSubmit = () => onSubmit({ title })

  return (
    <Form onSubmit={_onSubmit}>
      <Label text="Title">
        <Input
          name="title"
          type="text"
          placeholder="E.g. Registration flow"
          onChange={(e) => setTitle(e.target.value)}
        />
      </Label>
      <div className="mt-4">
        <Button type="submit">Create</Button>
      </div>
    </Form>
  )
}
