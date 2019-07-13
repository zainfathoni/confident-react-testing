import React, { useState } from 'react'
import Button from './Button'

function ToggleHooks() {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div>
      <span>{toggle ? 'On' : 'Off'}</span>
      {/* TODO: Render Button */}
    </div>
  )
}

export default ToggleHooks
