import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const getCollectionData = async (collectionName) => {
  const snapshot = await getDocs(collection(db, collectionName));
  return snapshot.docs.map((doc) => ({ ...doc.data(), docId: doc.id }));
};

export default getCollectionData;
