import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'

const InputField = styled.input(({ errors }) => ({
  color: errors ? 'red' : 'black',
  width: '50%',
}))

const Input = ({ name, value, onChange, form, validations, errors }) => {
  const [error, setError] = useState('')
  const [isTouched, setIsTouched] = useState(false)
  const [initialValue] = useState(value)

  useEffect(() => {
    if (value !== initialValue) {
      setIsTouched(true)
    }
  }, [value])

  useEffect(() => {
    if (validations && isTouched) {
      setError(errors[name] ? errors[name] : '')
    }
  }, [value, validations])

  return (
    <div>
      <InputField name={name} value={value} onChange={onChange} />
      <p>
        <small style={{ color: 'red' }}>{error}</small>
      </p>
    </div>
  )
}

export default Input
