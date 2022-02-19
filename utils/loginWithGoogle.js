import { signInWithPopup } from 'firebase/auth'
import store from '../Redux/store'
import { addUser } from '../Redux/UserSlice'
import { auth, provider } from './firebase'

const loginWidthGoogle = async () => {
  const res = await signInWithPopup(auth, provider)
  store.dispatch(
    addUser({
      userId: res.user.uid,
      name: res.user.displayName,
      email: res.user.email,
    }),
  )
}

export default loginWidthGoogle
