import React from 'react'
import Card from './core/Card'
import { MenuIcon } from '../toolkit'

export default function BuddiesList() {
  return (
    <div>
      <Card className="flex items-center">
        <img
          className="mr-4 w-10 h-10 rounded-full block"
          src="https://randomuser.me/api/portraits/lego/1.jpg"
          alt="Buddie 1"
        />
        <div className="w-full flex items-center justify-between">
          <div className="flex-1">borislav@email.com</div>
          <div>
            <MenuIcon />
          </div>
        </div>
      </Card>
    </div>
  )
}
