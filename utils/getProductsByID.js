import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from './firebase'

const getProductsById = async (docId) => {
  const data = await getDoc(doc(collection(db, 'Products'), docId))
  const res = data.data()
  return res
}

export default getProductsById
