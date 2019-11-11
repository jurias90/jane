import React , {useState, useEffect}from "react";
import { updateSearch } from "../redux/ducks/search";
import { useSelector, connect } from "react-redux";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const mapDispatchToProps = dispatch => ({
  dispatchUpdateSearch: payload => dispatch(updateSearch(payload))
});

const SearchBar = styled.input({
  width: "75%"
});
const Submit = styled.button({});

const SearchBody = ({ dispatchUpdateSearch }) => {
  const search = useSelector(state => state.search.search);

  const [isValid, setIsValid] = useState(false)

  const onChange = e => {    
    const {
      target: { name, value }
    } = e;
    dispatchUpdateSearch({
        [name]:value
    })
  };

  useEffect(() =>{
    let valid = search.term.length > 0 ? true : false
    setIsValid(valid)
  },[search])

  return (
    <div>
      <SearchBar name={"term"} value={search.term} onChange={onChange}/>
      <Link to="/products">
        <Submit disabled={!isValid}>Submit</Submit>
      </Link>
    </div>
  );
};

export default connect(
  undefined,
  mapDispatchToProps
)(SearchBody);
