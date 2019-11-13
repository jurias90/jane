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
  borderRadius: '3px',
  width: '10em',
  height: '2em',
  marginTop: '5%',
  fontSize: '90%',
})

const stockImg =
  'https://s3-us-west-1.amazonaws.com/iheartjane/images/stock_photos/general/indica.png'

const ProductCard = p => {
  return (
    <Container>
      <Card>
        <img
          alt={'Image of' + p.product.name}
          src={
            p.product.photos === ''
              ? stockImg
              : p.product.photos[0].urls.extraLarge
          }
          width="125px"
        />
        <div>
          <h4>{p.product.category}</h4>
          <h3>{p.productname}</h3>
          <h3>
            {p.product.kind_subtype.length > 0
              ? p.product.kind_subtype
              : p.product.kind}
          </h3>
          <h3>{p.product.brand}</h3>
          <p>#420</p>
          <AddToCart>AddToCart</AddToCart>
        </div>
      </Card>
    </Container>
  )
}

export default ProductCard
