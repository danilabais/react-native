import { api } from 'src/common/api'

class RegistrationApi {
  async registration(user) {
    try {
      const registrationResponse = await api.post
        ('https://www.1121177-cx06692.tw1.ru/api/user', user)
      return {
        data: registrationResponse,
        error: { isLoading: false, message: '' },
      }
    } catch (error) {
      return { data: null, error: { isLoading: false, data: error.response.data } }
    }
  }
}

export default new RegistrationApi