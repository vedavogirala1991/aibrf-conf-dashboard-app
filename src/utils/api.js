import {
  _getUsers,
  _getEvents,
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getEvents(),
  ]).then(([users, events]) => ({
    users,
    events,
  }))
}
