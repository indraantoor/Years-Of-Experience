import { collection, getDocs, doc, updateDoc, getDoc } from "@firebase/firestore";
import { db } from "../firebase-config";

export const fetchExperiencesRequest = async (userId) => {
  const workExperiencesRef = collection(db, "users", userId, "workExperiences");
  const workExperiences = await getDocs(workExperiencesRef);
  const response = workExperiences.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return response;
};

export const fetchUserDetailsRequest = async (userId) => {
  const userRef = doc(db, "users", userId);
  const user = await getDoc(userRef);
  const response = { ...user.data(), id: userId };
  return response;
};