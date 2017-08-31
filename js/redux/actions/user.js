export const editProfile = user =>
  ({
    type: 'EDIT_PROFILE',
    payload: {
      user
    }
  })

export const editProfileSuccess = res =>
  ({
    type: 'EDIT_PROFILE_SUCCESS',
    payload: {
      user: res.body.user
    }
  })

export const editProfileFailure = res =>
  ({
    type: 'EDIT_PROFILE_FAILURE',
    payload: {
      error: res.body.error || res
    }
  })

export const refreshUser = () =>
  ({
    type: 'REFRESH_USER'
  })
