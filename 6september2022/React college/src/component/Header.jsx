import React from 'react'

const Header = ({title}) => {
  return (
    <div style={headingStyle}>I am {title}</div>
  )
}

const headingStyle={
  color:"darkCyan"
}

export default Header