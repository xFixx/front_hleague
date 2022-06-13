import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { $api } from '../../services/api'

const activate = async (router) => {
  const x = new URLSearchParams(window.location.search)
  try {
    let obj = {}
    for (const [key, value] of x.entries()) {
      obj[key] = value
    }
    await $api.post('/accounts/auth/users/activation/', obj)
    router.push('/welcome')
  } catch (e) {
    console.log(e.response)
  }
}

const Activate = () => {
  const router = useHistory()

  useEffect(() => {
    activate(router)
  }, []);

  return null;
}

export default Activate
