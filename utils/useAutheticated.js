import { onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'
import { auth } from './firebase'

const useAutheticated = () => {
  const [user, setuser] = useState()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setuser(user)
    }
  })

  return user
}

export default useAutheticated
