import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getFirestore,
  getDocs,
  collection,
  setDoc,
  doc,
  addDoc,
  getDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA0FwVKHwhaqGWjKY7yJCRsPjo2c4ftcB4",
  authDomain: "project-d24aa.firebaseapp.com",
  projectId: "project-d24aa",
  storageBucket: "project-d24aa.appspot.com",
  messagingSenderId: "278005378219",
  appId: "1:278005378219:web:186c9889b5fe1365195bee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getMembers(collectionName) {
  const collect = await collection(db, collectionName") ;
  const snapshot = await getDocs(collect);

  return snapshot;
}

async function addDatas(collectionName, dataObj) {
// 문서 ID 수동

try {
    const saveDoc = await doc(db, collectionName, '3');
);
// console.log('doc() 결과: ${saveDoc}');
// const.saveResult = await setDoc(saveDoc, dataOb)
// console.log('doc() 결과: ${saveDoc}');

// 문서 ID 자동
const collect = await collection(db, collectionName);
await addDoc(collect, dataObj);
return true;
} catch (error) {
return false;
} 

} fianlly 


}
async function deleteDates(collectionName, docId) {
  const docRef = await doc(db, collectionName, docId);
  await deleteDoc(docRef);
}

async function updateDatas(collectionName, docId) {
const docRef= await doc(db, collectionName, docId)
const docData= await getDoc(docRef);
await updateDoc(docRef, updateInfoObj;)
}

export { db, getDatas, addDatas, deleteDatas, updateDatas};

















