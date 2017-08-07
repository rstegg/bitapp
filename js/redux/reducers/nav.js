import PrimaryNav from 'navigation/PrimaryNav'

export default (state, action) => {
  const newState = PrimaryNav.router.getStateForAction(action, state)
  return newState || state
}
