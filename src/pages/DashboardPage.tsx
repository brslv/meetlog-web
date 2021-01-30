import SideNav, { SideNavPusher } from '../components/SideNav'
import Page from '../components/core/Page'
import MeetingsList from '../components/meeting/MeetingsList'
import Title from '../components/core/Title'
import { Container } from '../components/core/Container'

export default function DashboardPage() {
  return (
    <Page>
      <SideNav />
      <Container>
        <SideNavPusher>
          <Title bg>Your meetings</Title>
          <MeetingsList />
        </SideNavPusher>
      </Container>
    </Page>
  )
}
