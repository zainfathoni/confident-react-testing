import React from 'react'
import Button from '../Button'

class Toggle extends React.Component {
  state = {
    toggle: false,
  }

  handleToggle = () => {
    this.setState({ toggle: !this.state.toggle })
  }

  render() {
    return (
      <div>
        <span>{this.state.toggle ? 'On' : 'Off'}</span>
        <Button onClick={this.handleToggle}>Toggle</Button>
      </div>
    )
  }
}

export default Toggle
