import React from 'react'
import { s } from 'lib/styled'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavigationDrawer, NavigationDrawerItem } from 'components'

const prefixRoute = 'admin'

export default {
  title: 'navigation/Drawer',
  component: NavigationDrawer,
  argTypes: {
    items: { control: 'array' },
    defaultSelected: {
      control: {
        type: 'text',
      },
    },
  },
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
}

const Template = (args) => <NavigationDrawer {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: (
    <>
      <NavigationDrawerItem name="Overview" path={`${prefixRoute}/overview`} />
      <NavigationDrawerItem name="Brokers" path={`${prefixRoute}/brokers`} />
      <NavigationDrawerItem name="Reports" path={`${prefixRoute}/reports`} />
      <NavigationDrawerItem
        name="Account"
        path={`${prefixRoute}/account`}
        style={s('mt-a mb-2')}
      />
    </>
  ),
}
