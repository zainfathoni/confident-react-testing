import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Toggle from './Toggle'

describe('Test Toggle using React Testing Library', () => {
  it('render Button component', () => {
    const { getByText, queryByText } = render(<Toggle />)

    expect(getByText('Off')).toBeDefined()
    expect(queryByText('On')).toBeNull()
  })
})
