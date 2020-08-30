import React from 'react'
import { mount } from 'enzyme'
import NavbarLink from '../../../components/Navbar/NavbarLink'

test('NavbarLink renders correctly', () => {
  const wrapper = mount(<NavbarLink href="/" />)

  expect(wrapper).toMatchSnapshot()
})
