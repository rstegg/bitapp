export default values => {
  const error = {}
  if (values.account !== values.confirmAccount) {
    error.confirmAccount = 'Account numbers do not match'
  }
  if (!values.routing) {
    error.routing = 'Required'
  }
  if (!values.account) {
    error.account = 'Required'
  }
  if (!values.confirmAccount) {
    error.confirmAccount = 'Required'
  }
  return error
}
