import SideNav from '../components/SideNav'
import Page from '../components/Page'
import MeetingsList from '../components/MeetingsList'
import SideNavPusher from '../components/SideNavPusher'

export default function DashboardPage() {
  return (
    <div>
      <Page>
        <SideNav />
        <SideNavPusher>
          <MeetingsList />
        </SideNavPusher>
      </Page>
    </div>
  )
}
