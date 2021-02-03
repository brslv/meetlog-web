import React from 'react'
import Buddy from './Buddy'
import { IAvatar } from '../Avatar'

export interface IBuddy {
  id: number
  name: string
  email: string
  avatar?: IAvatar
}

export default function BuddiesList() {
  const buddies: IBuddy[] = [{ id: 1, name: 'Bobi', email: 'bobi@email.com' }]

  return (
    <div>
      {buddies.map((buddy) => (
        <Buddy data={buddy} />
      ))}
    </div>
  )
}
