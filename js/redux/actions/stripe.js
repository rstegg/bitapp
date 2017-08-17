import { networkRequestError } from './network_request';
export const BANK_TYPE = 'bank_account'
export const CARD_TYPE = 'card'
export const STRIPE_PUBLISHABLE_TOKEN = process.env.STRIPE_PUBLISHABLE_TOKEN;
export const CREATE_STRIPE_TOKEN_ERROR = 'CREATE_STRIPE_TOKEN_ERROR';
export const CREATE_STRIPE_TOKEN = 'CREATE_STRIPE_TOKEN';

export const createStripeToken = data =>
({
  type: 'CREATE_STRIPE_TOKEN',
  payload: {
    data
  }
})

export const createStripeTokenSuccess = data =>
({
  type: 'CREATE_STRIPE_TOKEN_SUCCESS',
  payload: {
    token: data.id
  }
})

export const createStripeTokenError = error =>
({
  type: 'CREATE_STRIPE_TOKEN_ERROR',
  payload: {
    error: error.message || error.type
  }
})
