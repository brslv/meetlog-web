import { Container } from './core/Container'
import Title from './core/Title'
import { ArrowDownIcon, ArrowUpIcon } from '../toolkit'
import cn from '../utils/cn'
import { useState } from 'react'

export default function Agenda() {
  const [isAgendaOpen, setIsAgendaOpen] = useState(false)

  return (
    <div className="bg-white dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
      <Container>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsAgendaOpen((prev) => !prev)}
        >
          <Title bg pushBottom={false}>
            Agenda
          </Title>
          {isAgendaOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </div>
        <div className={cn({ 'mt-4': true, hidden: !isAgendaOpen })}>
          This is my agenda
        </div>
      </Container>
    </div>
  )
}
