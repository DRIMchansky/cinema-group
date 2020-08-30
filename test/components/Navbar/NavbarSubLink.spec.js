import React from 'react'
import { mount } from 'enzyme'
import NavbarSubLink from '../../../components/Navbar/NavbarSubLink'

test('NavbarSubLink renders correctly', () => {
  const wrapper = mount(<NavbarSubLink href="/" />)

  expect(wrapper).toMatchSnapshot()
})
