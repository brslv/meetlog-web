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
            <div className="text-xs bg-gray-200 rounded-full inline-block px-4 py-1.5 mb-4 text-gray-600 uppercase">
              Your meetings
            </div>
            <MeetingsList />
          </SideNavPusher>
        </PageContainer>
      </Page>
    </div>
  )
}
