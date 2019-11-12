function validator(form) {
  let errors = {}
  let validations = {}
  let valid = false

  Object.keys(form).map(key => {
    const value = form[key]
    if (key === 'email') {
      valid = value.includes('@') ? true : false
      errors[key] = !valid ? 'Please add the @ to your email.' : null
    }
    else if (key === 'phone_number') {
      valid = value.length > 9 ? true : false
      errors[key] = !valid
        ? 'Please add all 10 digits of your phone number, Including Area Code'
        : null
    } else {
      valid = value.length > 1 ? true : false
      errors[key] = !valid
        ? 'Please make your input longer then 2 letters.'
        : null
    }
    validations[key] = valid
    return null
  })
  return [errors, validations]
}

export default validator
