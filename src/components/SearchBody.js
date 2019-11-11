import React, { useState, useEffect } from 'react'
import { updateSearch } from '../redux/ducks/search'
import { useSelector, connect } from 'react-redux'
import styled from '@emotion/styled'
import { withRouter } from 'react-router-dom'

const mapDispatchToProps = dispatch => ({
  dispatchUpdateSearch: payload => dispatch(updateSearch(payload)),
})

const SearchBar = styled.input({
  width: '75%',
})
const Submit = styled.button({})

const SearchBody = ({ dispatchUpdateSearch, history }) => {
  const search = useSelector(state => state.search.search)

  const [isValid, setIsValid] = useState(false)

  const onChange = e => {
    const {
      target: { name, value },
    } = e
    dispatchUpdateSearch({
      [name]: value,
    })
  }

  useEffect(() => {
    let valid = search.term.length > 0 ? true : false
    setIsValid(valid)
  }, [search])

  const handleOnClick = () => {
    if (isValid) {
      history.push('/products')
    }
  }

  return (
    <div>
      <SearchBar name={'term'} value={search.term} onChange={onChange} />
      <Submit disabled={!isValid} onClick={handleOnClick}>
        Submit
      </Submit>
    </div>
  )
}

export default connect(
  undefined,
  mapDispatchToProps
)(withRouter(SearchBody))
