import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavigationDrawer } from 'components'

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
  children: <>hello world</>,
}
