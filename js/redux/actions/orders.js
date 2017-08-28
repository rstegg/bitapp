export const fetchOrders = user =>
  ({
    type: 'FETCH_ORDERS',
    payload: {
      user
    }
  })

export const fetchOrdersSuccess = res =>
  ({
    type: 'FETCH_ORDERS_SUCCESS',
    payload: {
      orders: res.body.orders
    }
  })

export const fetchOrdersFailure = res =>
  ({
    type: 'FETCH_ORDERS_FAILURE',
    payload: {
      error: res.body.error || res
    }
  })

export const setActiveOrder = order =>
  ({
    type: 'SET_ACTIVE_ORDER',
    payload: {
      order
    }
  })
