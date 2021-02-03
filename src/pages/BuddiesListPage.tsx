import React from 'react'
import { Container } from '../components/core/Container'
import Page from '../components/core/Page'
import SideNav, { SideNavPusher } from '../components/SideNav'
import Title from '../components/core/Title'
import BuddiesList from '../components/BuddiesList'

export default function BuddiesListPage() {
  return (
    <Page narrow>
      <SideNav />
      <Container>
        <SideNavPusher>
          <Title bg>Your buddies</Title>
          <BuddiesList />
        </SideNavPusher>
      </Container>
    </Page>
  )
}
