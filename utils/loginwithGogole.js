import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from './firebase'

const loginwithGogole = async () => {
  await signInWithPopup(auth, provider)
}

export default loginwithGogole
