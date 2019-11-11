import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const Bar = styled.div({
  background: '#5755d9',
  textAlign: 'center',
  height: '30px',
})

function NavBar() {
  return (
    <Bar>
      <Link to="/">
        <span role="img" aria-label="heart">
          💛
        </span>
      </Link>
    </Bar>
  )
}

export default NavBar
