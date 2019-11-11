import { useState, useEffect } from "react";
import validator from "../functions/validator";

function useForm({ form }) {
  const [data, setData] = useState({});

  useEffect(() => {
    let isValid = true;
    const results = validator(form);
    const errors = results[0];
    const validations = results[1];
    const inputs = [
      "firstName",
      "lastName",
      "route",
      "locality",
      "administrative_area_level_1",
      "postal_code",
      "email"
    ]
   for(let i =0; i< inputs.length;i++) {
        if(errors[inputs[i]]){
          isValid = false;
          break;
        }
    }; 

    setData({
      isValid,
      validations,
      errors
    });
  }, [form]);

  return data;
}

export default useForm;
