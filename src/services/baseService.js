import { getBaseHttpClient, getProtectedHttpClient } from 'httpClient'

class BaseService {
  constructor() {
    const baseUrl = process.env.REACT_APP_PLATFORM_API
    const config = {}

    this.httpClient = getBaseHttpClient(baseUrl, config)
    this.protectedHttpClient = getProtectedHttpClient(baseUrl, config)
  }
}

export default BaseService
