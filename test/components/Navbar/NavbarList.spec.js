import React from 'react'
import { mount } from 'enzyme'
import NavbarList from '../../../components/Navbar/NavbarList'

test('NavbarList renders correctly', () => {
  const wrapper = mount(<NavbarList />)

  expect(wrapper).toMatchSnapshot()
})
