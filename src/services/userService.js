import BaseService from './baseService'

class UserService extends BaseService {
  getUser(authId) {
    return this.httpClient.get(`/users?authId=${authId}`)
  }

  createUser(authId, firstName, lastName) {
    return this.httpClient.post('/users', { authId, firstName, lastName })
  }
}

export default UserService
