import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const Welcome = styled.div({
  textAlign: 'center',
  height: 'calc(100vh - 70px)',
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '8px 16px',
  marginTop: '20%',
})
const Continue = styled.button({
  backgroundColor: '#66ff33',
  textAlign: 'center',
  borderRadius: '3px',
  width: '10em',
  height: '2em',
  marginTop: '5%',
  fontSize: '90%',
})

function WelcomeBody() {
  return (
    <Welcome>
      <h1>Discover the best in cannabis at Jane.</h1>
      <Link to="/subscribe">
        <Continue>Continue</Continue>
      </Link>
    </Welcome>
  )
}

export default WelcomeBody
