export const updateProfile = user =>
({
  type: 'UPDATE_PROFILE',
  payload: {
    user
  }
})

export const updateProfileSuccess = res =>
({
  type: 'UPDATE_PROFILE_SUCCESS',
  payload: {
    user: res.body.user
  }
})

export const updateProfileFailure = res =>
({
  type: 'UPDATE_PROFILE_FAILURE'
})
