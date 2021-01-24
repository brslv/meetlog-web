import SideNav, { SideNavPusher } from '../components/SideNav'
import Page, { PageContainer } from '../components/Page'
import MeetingsList from '../components/MeetingsList'

export default function DashboardPage() {
  return (
    <div>
      <Page>
        <SideNav />
        <PageContainer>
          <SideNavPusher>
            <MeetingsList />
          </SideNavPusher>
        </PageContainer>
      </Page>
    </div>
  )
}
