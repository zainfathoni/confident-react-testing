import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import Toggle from './Toggle'

configure({ adapter: new Adapter() })

describe('Test Toggle using Enzyme', () => {
  it('shallow render Button component', () => {
    const wrapper = shallow(<Toggle />)
  })
})
