import su from 'superagent'
import { path } from 'ramda'
import { Observable } from 'rxjs'

const API_HOST = 'http://localhost:3000/api/v1'

export const getError = path([ 'body', 'error' ])

export const handleError = (fn, res) =>
  Observable.of(
    fn(getError(res))
  )

export const openPost = (endpoint, body) =>
  Observable.from(
    su.post(`${API_HOST}/${endpoint}`)
      .send(body)
      .set('Accept', 'application/json')
  )

export const get = (endpoint, token) =>
  Observable.from(
    su.get(`${API_HOST}/${endpoint}`)
      .set('Accept', 'application/json')
      .set('Authorization', token)
  )

export const post = (endpoint, body, token) =>
  Observable.from(
    su.post(`${API_HOST}/${endpoint}`)
      .send(body)
      .set('Accept', 'application/json')
      .set('Authorization', token)
  )

export const imagePost = (endpoint, image, token) =>
  Observable.from(
    su.post(`${API_HOST}/${endpoint}`)
      .attach('image', image)
      .set('Accept', 'application/json')
      .set('Authorization', token)
  )

export const put = (endpoint, body, token) =>
  Observable.from(
    su.put(`${API_HOST}/${endpoint}`)
      .send(body)
      .set('Accept', 'application/json')
      .set('Authorization', token)
  )

export const remove = (endpoint, token) =>
  Observable.from(
    su.delete(`${API_HOST}/${endpoint}`)
      .set('Accept', 'application/json')
      .set('Authorization', token)
  )
