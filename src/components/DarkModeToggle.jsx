import React from 'react'

const DarkModeToggle = ({handleToggleBtn, isDark}) => {
  // TODO: Implement dark mode toggle logic

  return (
    <button onClick={handleToggleBtn}>Toggle {isDark ?"Light Mode": "Dark Mode"} </button>
  )
}

export default DarkModeToggle
