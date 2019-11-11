import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div({
  width: '100%',
  border: '1px solid grey',
  margin: '2px',
})

const Card = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const AddToCart = styled.button({
  backgroundColor: '#66ff33',
  textAlign: 'center',
  borderRadius: '15px',
  width: '10em',
  height: '2em',
  marginTop: '5%',
  fontSize: '90%',
  boxShadow: '1px 2px',
})

const stockImg =
  'https://s3-us-west-1.amazonaws.com/iheartjane/images/stock_photos/general/indica.png'

const ProductCard = ({
  name = '',
  brand = '',
  category = '',
  kind = '',
  img = stockImg,
}) => {
  return (
    <Container>
      <Card>
        <img alt={'Image of' + name} src={img} width="125px" />
        <div position="right">
          <h4>{category}</h4>
          <h3>{name}</h3>
          <h3>{kind}</h3>
          <h3>{brand}</h3>
          <p>#420</p>
          <AddToCart>AddToCart</AddToCart>
        </div>
      </Card>
    </Container>
  )
}

export default ProductCard
