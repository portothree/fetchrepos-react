import { htpp } from './http'

export const fetchRepos = user => htpp.get(`users/${user}`)