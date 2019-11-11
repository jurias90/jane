import React from 'react'
import styled from '@emotion/styled'

const Card = styled.div({
    width:'25%',
    display: 'flex',
    
})

const stockImg = "https://s3-us-west-1.amazonaws.com/iheartjane/images/stock_photos/general/indica.png"

const ProductCard = ({name='', brand= '', catagory='', kind='', description='', img=stockImg, kind_subtype = ""}) => {

    return(
        <Card>
            <h4>{catagory}</h4>
            <img src={img} />
            <h3>{name}</h3>
            <h3>{kind_subtype}</h3>
            <h3>{brand}</h3>
        </Card>
    )

}

export default ProductCard