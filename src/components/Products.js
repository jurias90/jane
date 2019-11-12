import React, { useState, useEffect } from 'react'
import { updateSearch } from '../redux/ducks/search'
import { useSelector, connect } from 'react-redux'
import ProductCard from './ProductCard'
import styled from '@emotion/styled'
import data from '../../src/products.json'

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
  height: '3em',
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
  borderRadius: '15px',
  width: '5em',
  height: '1em',
  marginTop: '5%',
  fontSize: '90%',
  boxShadow: '1px 2px',
})

const Products = ({ dispatchUpdateSearch }) => {
  const initialsProducts = useState(data['products'])
  const [products, setProducts] = useState(data['products'])

  const searchTopics = {
    name: '',
    brand: '',
    category: '',
    kind: '',
    kind_subtype: '',
    description: '',
  }

  const search = useSelector(state => state.search.search)
  const user = useSelector(state => state.user.user)

  const updateProducts = () => {
    setProducts(initialsProducts)
    let searchTerm = search.term.toLowerCase()
    let tempTopic = ''
    let tempProducts = []
    products.forEach(element => {
      for (const key in searchTopics) {
        tempTopic = element[key]
        if (!tempTopic) {
          continue
        } else if (tempTopic.toLowerCase().includes(searchTerm)) {
          tempProducts.push(element)
          break
        }
      }
    })
    setProducts(tempProducts)
  }

  useEffect(() => {
    updateProducts()
  }, [])

  useEffect(() => {
    updateProducts()
  }, [search])

  const onChange = e => {
    const {
      target: { name, value },
    } = e
    dispatchUpdateSearch({
      [name]: value,
    })
    updateProducts()
  }

  const handleOnClick = () => {}

  return (
    <Page>
      <div>
        <SearchBar name={'term'} value={search.term} onChange={onChange} />
        <Submit onClick={handleOnClick}>Submit</Submit>
      </div>
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
      {products.map((p, i) => (
        <ProductCard
          key={i}
          name={p.name}
          brand={p.brand}
          catagory={p.catagory}
          kind={p['kind_subtype'].length > 0 ? p['kind_subtype'] : p.kind}
          img={p.photos[0].urls.extraLarge}
        />
      ))}
    </Page>
  )
}

export default connect(undefined, mapDispatchToProps)(Products)
