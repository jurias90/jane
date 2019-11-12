/* eslint-disable no-undef */
import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { updateUser } from '../redux/ducks/user'
import styled from '@emotion/styled'

const mapDispatchToProps = dispatch => ({
  dispatchUpdateUser: payload => dispatch(updateUser(payload)),
})

const SearchField = styled.input(({ errors }) => ({
  color: errors ? 'red' : 'black',
  width: '50%',
}))

const Search = ({
  name,
  value,
  onChange,
  form,
  validations,
  errors,
  dispatchUpdateUser,
}) => {
  const addressInputRef = useRef(null)
  const autocomplete = useRef(null)

  const [error, setError] = useState('')

  useEffect(() => {
    if (validations) {
      name in errors ? setError(errors[name]) : setError('')
    }
  }, [value])

  const onPlaceChange = ac => () => {
    let place = ac.getPlace().address_components
    const address = {}
    const mapping = {
      street_number: 'short_name',
      route: 'long_name',
      locality: 'long_name',
      administrative_area_level_1: 'short_name',
      postal_code: 'short_name',
    }
    address['route'] = place[0]['short_name'] + ' ' + place[1]['long_name']
    console.log(place)
    for (let i = 2; i < place.length; i++) {
      const type = place[i].types[0]
      if (mapping[type]) {
        const value = place[i][mapping[type]]
        address[type] = value
      }
    }
    for (const name in address) {
      dispatchUpdateUser({
        [name]: address[name],
      })
    }
  }

  useEffect(() => {
    if (addressInputRef.current) {
      onPlaceChange(autocomplete.current)
    }
    autocomplete.current = new google.maps.places.Autocomplete(
      addressInputRef.current,
      { types: ['address'] }
    )
    autocomplete.current.setFields(['address_component'])
    autocomplete.current.addListener(
      'place_changed',
      onPlaceChange(autocomplete.current)
    )
  }, [addressInputRef])

  return (
    <div>
      <SearchField
        ref={addressInputRef}
        name={name}
        value={value}
        onChange={onChange}
      />
      <p>
        <small style={{ color: 'red' }}>{error}</small>
      </p>
    </div>
  )
}

export default connect(undefined, mapDispatchToProps)(Search)
