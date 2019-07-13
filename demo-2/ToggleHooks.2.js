import React, { useState } from 'react'
import Button from './Button'

function ToggleHooks() {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div>
      {/* TODO: Render Value */}
      {/* TODO: Render Button */}
    </div>
  )
}

export default ToggleHooks
