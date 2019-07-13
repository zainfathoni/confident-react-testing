import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Toggle from './Toggle'

describe('Test Toggle using React Testing Library', () => {
  afterEach(cleanup)

  it('render Button component', () => {
    const { debug, getByText, queryByText } = render(<Toggle />)
    debug()

    expect(getByText('Off')).toBeDefined()
    expect(queryByText('On')).toBeNull()

    fireEvent.click(getByText('Toggle'))

    expect(getByText('On')).toBeDefined()
    expect(queryByText('Off')).toBeNull()
  })
})
