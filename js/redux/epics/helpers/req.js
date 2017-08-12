import su from 'superagent'
import { Observable } from 'rxjs'

const API_HOST = 'http://localhost:3000/api/v1'

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
  )

export const post = (endpoint, body, token) =>
  Observable.from(
    su.post(`${API_HOST}/${endpoint}`)
      .send(body)
      .set('Accept', 'application/json')
  )

export const imagePost = (endpoint, body, token) =>
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
  )

export const remove = (endpoint, token) =>
  Observable.from(
    su.delete(`${API_HOST}/${endpoint}`)
      .set('Accept', 'application/json')
      .set('Authorization', token)
  )
