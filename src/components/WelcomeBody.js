import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom"

const Welcome = styled.div({
  textAlign: "center",
  height: "calc(100vh - 70px)",
  display: "inline-block",
  alignItems: "center",
  padding: "23%",
  textShadow: "1px 2px #c0c0c0"
});
const Continue = styled.button({
  backgroundColor: "#66ff33",
  textAlign: "center",
  borderRadius: "15px",
  width: "10em",
  height: "2em",
  marginTop: "5%",
  fontSize: "90%",
  boxShadow: "1px 2px"
});

function WelcomeBody() {
  return (
    <Welcome>
      <h1>Discover the best in cannabis at Jane.</h1>
      <Link to="/subscribe"><Continue onClick>Continue</Continue></Link>
    </Welcome>
  );
}

export default WelcomeBody;
