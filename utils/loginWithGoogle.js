import { signInWithPopup } from 'firebase/auth'
import store from '../Redux/store'
import { login } from '../Redux/UserSlice'
import { auth, provider } from './firebase'

const loginWidthGoogle = async () => {
  const res = await signInWithPopup(auth, provider)
  store.dispatch(login(res.user))
}

export default loginWidthGoogle
