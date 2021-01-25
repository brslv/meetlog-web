import Page from '../components/core/Page'
import SideNav, { SideNavPusher } from '../components/SideNav'
import Title from '../components/core/Title'
import { Container } from '../components/core/Container'
import { ArrowDownIcon, ArrowUpIcon } from '../toolkit'
import cn from '../utils/cn'
import { useState } from 'react'

export default function MeetingPage() {
  const [isAgendaOpen, setIsAgendaOpen] = useState(true)
  return (
    <Page>
      <SideNav />
      <SideNavPusher>
        <div className="h-screen grid grid-cols-2">
          <div className="border-r border-gray-300">
            <div className="bg-white border-b border-gray-300">
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
          </div>
          <div>
            <Container>
              <Title bg>Output</Title>
            </Container>
          </div>
        </div>
      </SideNavPusher>
    </Page>
  )
}
