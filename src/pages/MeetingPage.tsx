import Page from '../components/core/Page'
import SideNav, { SideNavPusher } from '../components/SideNav'
import React, { useState } from 'react'
import MeetingSection from '../components/MeetingSection'
import { IEntity } from '../components/Entity'
import Agenda from '../components/Agenda'
import MeetingInputField from '../components/MeetingInputField'

export default function MeetingPage() {
  const [inputs] = useState<IEntity[]>([
    {
      id: 1,
      author: {
        name: 'Samuel',
        avatar: {
          src: 'https://randomuser.me/api/portraits/lego/1.jpg',
        },
      },
      text: 'Lorem ipsum dolor sit amet',
      output: null,
    },
    {
      id: 2,
      author: {
        name: 'Johan',
        avatar: {
          src: 'https://randomuser.me/api/portraits/lego/2.jpg',
        },
      },
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      output: null,
    },
    // {
    //   id: 3,
    //   author: {
    //     name: 'Victor',
    //     avatar: {
    //       src: 'https://randomuser.me/api/portraits/lego/3.jpg',
    //     },
    //   },
    //   text: 'Lorem ipsum dolor sit amet',
    //   output: {
    //     type: EntityOutputType.Note,
    //   },
    // },
    // {
    //   id: 4,
    //   author: {
    //     name: 'Dave',
    //     avatar: {
    //       src: 'https://randomuser.me/api/portraits/lego/4.jpg',
    //     },
    //   },
    //   text: 'Lorem ipsum dolor sit amet',
    //   output: null,
    // },
    // {
    //   id: 5,
    //   author: {
    //     name: 'Victor',
    //     avatar: {
    //       src: 'https://randomuser.me/api/portraits/lego/3.jpg',
    //     },
    //   },
    //   text: 'Lorem ipsum dolor sit amet',
    //   output: {
    //     type: EntityOutputType.NextStep,
    //   },
    // },
    // {
    //   id: 6,
    //   author: {
    //     name: 'Dave',
    //     avatar: {
    //       src: 'https://randomuser.me/api/portraits/lego/4.jpg',
    //     },
    //   },
    //   text: 'Lorem ipsum dolor sit amet',
    //   output: null,
    // },
    // {
    //   id: 7,
    //   author: {
    //     name: 'Dave',
    //     avatar: {
    //       src: 'https://randomuser.me/api/portraits/lego/4.jpg',
    //     },
    //   },
    //   text:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    //   output: null,
    // },
  ])
  const [outputs] = useState<IEntity[]>([
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet',
      author: {
        name: 'Dave',
        avatar: {
          src: 'https://randomuser.me/api/portraits/lego/4.jpg',
        },
      },
      output: null,
    },
  ])

  return (
    <Page>
      <SideNav />
      <SideNavPusher>
        <div className="h-screen grid grid-cols-2">
          <MeetingSection
            headerRight={<Agenda />}
            footer={<MeetingInputField />}
            title="Input"
            entities={inputs}
          />
          <MeetingSection title="Output" entities={outputs} />
        </div>
      </SideNavPusher>
    </Page>
  )
}
