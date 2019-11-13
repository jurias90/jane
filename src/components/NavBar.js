import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const Bar = styled.div({
  background: '#5755d9',
  textAlign: 'center',
  height: '30px',
})

const Logo = styled.div({
  '> a': { textDecoration: 'none' },
  fontSize: '20px',
  padding: '1px 0px',
})

function NavBar() {
  return (
    <Bar>
      <Logo>
        <Link to="/">💛</Link>
      </Logo>
    </Bar>
  )
}

export default NavBar
