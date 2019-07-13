import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import Toggle from './Toggle'
// import Toggle from './ToggleHooks'

configure({ adapter: new Adapter() })

describe('Test Toggle using Enzyme', () => {
  it('shallow render Button component', () => {
    const wrapper = shallow(<Toggle />)

    expect(wrapper.state().toggle).toBe(false)
    expect(wrapper.find('span').prop('children')).toBe('Off')

    wrapper.instance().handleToggle()

    expect(wrapper.state().toggle).toBe(true)
    expect(wrapper.find('span').prop('children')).toBe('On')
  })
})
