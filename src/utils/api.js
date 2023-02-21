import {
  _getUsers,
  _getPets,
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getPets(),
  ]).then(([users, pets]) => ({
    users,
    pets,
  }))
}
