import React from 'react'
import renderer from 'react-test-renderer'
import TicketLink from '../../components/TicketLink'

test('TicketLink renders correctly', () => {
  const tree = renderer.create(<TicketLink />).toJSON()

  expect(tree).toMatchSnapshot()
})
