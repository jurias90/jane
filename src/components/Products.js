import React from 'react'
import { updateSearch } from '../redux/ducks/search'
import { useSelector, connect } from 'react-redux'
import styled from '@emotion/styled'
import useProducts from '../hooks/useProducts'
import ProductCard from './ProductCard'

const mapDispatchToProps = dispatch => ({
  dispatchUpdateSearch: payload => dispatch(updateSearch(payload)),
})

const Page = styled.div({
  width: '85%',
  margin: '0px auto',
  display: 'flex',
  flexWrap: 'wrap',
})

const SearchBar = styled.input({
  width: '15em',
  height: '2em',
  border: '1px solid grey',
  margin: '0px auto',
})

const UserAddress = styled.div({
  fontSize: '20px',
  margin: '0px auto',
})

const Submit = styled.button({
  backgroundColor: '#66ff33',
  textAlign: 'center',
  borderRadius: '3px',
  width: '5em',
  height: '2em',
  marginTop: '5%',
  fontSize: '90%',
})
const TopBar = styled.div({
  border: '1px solid grey',
  borderRadius: '3px',
  margin: '0px auto',
  alignContent: 'center',
  padding: '8px 16px',
})

const Products = ({ dispatchUpdateSearch }) => {
  const search = useSelector(state => state.search.search)
  const user = useSelector(state => state.user.user)
  const products = useProducts({ search: search.term })

  const onChange = e => {
    const {
      target: { name, value },
    } = e
    dispatchUpdateSearch({
      [name]: value,
    })
  }

  return (
    <Page>
      <TopBar>
        <p>Search here:</p>
        <SearchBar name={'term'} value={search.term} onChange={onChange} />
        <Submit>Submit</Submit>

        <UserAddress>
          <p>
            {user.route +
              ', ' +
              user.locality +
              ', ' +
              user.administrative_area_level_1 +
              ', ' +
              user.postal_code}
          </p>
        </UserAddress>
      </TopBar>
      {products.map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </Page>
  )
}

export default connect(undefined, mapDispatchToProps)(Products)
