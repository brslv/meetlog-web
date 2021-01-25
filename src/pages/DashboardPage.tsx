import SideNav, { SideNavPusher } from '../components/SideNav'
import Page, { PageContainer } from '../components/core/Page'
import MeetingsList from '../components/MeetingsList'
import Title from '../components/core/Title'

export default function DashboardPage() {
  return (
    <div>
      <Page>
        <SideNav />
        <PageContainer>
          <SideNavPusher>
            <Title bg>Your meetings</Title>
            <MeetingsList />
          </SideNavPusher>
        </PageContainer>
      </Page>
    </div>
  )
}
