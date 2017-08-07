import TabNav from 'navigation/TabNav'

export default (state, action) => {
  const newState = TabNav.router.getStateForAction(action, state)
  return newState || state
}
