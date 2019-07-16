import React from 'react'
import Button from './Button'

class Toggle extends React.Component {
  state = {
    toggle: false,
  }

  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle,
    })
  }

  render() {
    return (
      <div>
        {/* TODO: Render Value */}
        {/* TODO: Render Button */}
      </div>
    )
  }
}

export default Toggle
