import React, { useEffect} from "react";
import { useSelector, connect } from "react-redux";
import { updateUser } from "../redux/ducks/user";
import { Link } from 'react-router-dom'
import Input from "./Input";
import styled from "@emotion/styled";
import useForm from "../hooks/useForm";
import Search from "./Search";

const mapDispatchToProps = dispatch => ({
  dispatchUpdateUser: payload => dispatch(updateUser(payload))
});

const Form = styled.div({
  margin: "5% 10%",
  borderColor: ' 1px solid grey'
});

const FormBody = ({ dispatchUpdateUser }) => {
  const user = useSelector(state => state.user.user);

  const form = useForm({ form: user });

  const onChange = event => {
    const {
      target: { name, value }
    } = event;
    dispatchUpdateUser({
      [name]: value
    });
  };

  useEffect(()=> {
  },[user])

  const setValid = () =>{
    dispatchUpdateUser({
      ['isValid']: true
    });
  }

  return (
    <Form>
      <p>First Name:</p>
      <Input
        name="firstName"
        value={user.firstName}
        onChange={onChange}
        form={user}
        validations={form.validations}
        errors={form.errors}
      />
      <p>Last Name:</p>
      <Input
        name="lastName"
        value={user.lastName}
        onChange={onChange}
        form={user}
        validations={form.validations}
        errors={form.errors}
      />
      <p>Email: </p>
      <Input
        name="email"
        value={user.email}
        onChange={onChange}
        form={user}
        validations={form.validations}
        errors={form.errors}
      />
      <p>Address</p>
      <Search
        name="route"
        value={user.route}
        onChange={onChange}
        form={user}
        validations={form.validations}
        errors={form.errors}
      />
      <p>City</p>
      <Input 
      name="locality" 
      value={user.locality} 
      onChange={onChange} />
      <p>State</p>
      <Input
        name="administrative_area_level_1"
        value={user.administrative_area_level_1}
        onChange={onChange}
        form={user}
        validations={form.validations}
        errors={form.errors}
      />
      <p>Zipcode</p>
      <Input 
      name="postal_code" 
      value={user.postal_code} 
      onChange={onChange} 
      form={user}
      validations={form.validations}
      errors={form.errors}/>

     <Link 
     to="/search">
       <button 
       name="submit" 
       disabled={!form.isValid} 
       onClick={setValid}>
        Submit
      </button></Link> 
    </Form>
  );
};
export default connect(
  undefined,
  mapDispatchToProps
)(FormBody);
