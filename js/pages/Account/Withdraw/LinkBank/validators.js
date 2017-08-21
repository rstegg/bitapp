export default values => {
  const errors = {}
  if (values.account !== values.confirmAccount) {
    errors.confirmAccount = 'Account numbers do not match'
  }
  if (!values.routing) {
    errors.routing = 'Required'
  }
  if (!values.account) {
    errors.account = 'Required'
  }
  if (!values.confirmAccount) {
    errors.confirmAccount = 'Required'
  }
  return errors
}
