import React from 'react'
import { mount } from 'enzyme'
import Navbar from '../../components/Navbar'

test('Navbar renders correctly', () => {
  const wrapper = mount(<Navbar />)

  expect(wrapper).toMatchSnapshot()
})
