import React from "react";
import styled from "@emotion/styled";

const Container = styled.div({
  width: "100%"
});

const Card = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent:'space-between'
});

const stockImg =
  "https://s3-us-west-1.amazonaws.com/iheartjane/images/stock_photos/general/indica.png";

const ProductCard = ({
  name = "",
  brand = "",
  category = "",
  kind = "",
  description = "",
  photo = stockImg,
  kind_subtype = ""
}) => {
  return (
    <Container>
      <Card>
        <img src={photo} width="125px" />
        <div>
          <h4>{category}</h4>
          <h3>{name}</h3>
          <h3>{kind}</h3>
          <h3>{brand}</h3>
          <p>#420</p>
        </div>
      </Card>
    </Container>
  );
};

export default ProductCard;
