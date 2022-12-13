import { api } from 'src/common/api'

class AuthApi {
  async auth(user) {
    try {
      const registrationResponse = await api.post
        ('/user/login', user)
      return {
        data: registrationResponse,
        error: { isLoading: false, message: '' },
      }
    } catch (error) {
      return { data: null, error: { isLoading: false, data: error.response.data } }
    }
  }

}

export default new AuthApi