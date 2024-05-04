
import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,} from "firebase/auth";
// import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore, collection, addDoc, getDocs,deleteDoc, doc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBWqzJqIdedtlXI1K5b8LFpXVoZcWPBeX4",
  authDomain: "login-signup-ba6fb.firebaseapp.com",
  projectId: "login-signup-ba6fb",
  storageBucket: "login-signup-ba6fb.appspot.com",
  messagingSenderId: "230058372122",
  appId: "1:230058372122:web:e29bda597e91db8508f5a3"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


export async function register(userInfo) {
  try {
    const { email, password, fullName, age } = userInfo;
    await createUserWithEmailAndPassword(auth, email, password);
    
    await addDoc(collection(db, "users"), {
      fullName,
      age,
      email,
    });

    

    alert(" Registered Successfully ");
  } catch (e) {
    alert(e.message);
  }
}

export function login(userInfo) {
  try {
    const { email, password } = userInfo;
    signInWithEmailAndPassword(auth, email, password);

    alert("Login successful");
  } catch (e) {
    alert(e.message);
  }
}

export async function addItem(userInfo) {
  try {
    const {  image } = userInfo;
    const storageRef = ref(storage, `images/${image.name}`);
    await uploadBytes(storageRef, image);
    const downloadURL = await getDownloadURL(storageRef);
  return downloadURL  
}
   
   catch (e) {
    alert('Post Successfully'); 
  } 
}

export async function getForm() {
  const querySnapshot = await getDocs(collection(db, "form"));
  const form = [];
  querySnapshot.forEach((doc) => {
    const userInfo = doc.data();
    userInfo.id = doc.id;

    form.push(userInfo);
  });

  return form;
}





export async function updateData (e, img) {
  const userd= e[0]
  try{
    console.log("userde",userd[0])
    console.log(img)
    const storageRef = ref(storage, `profile image/${img.name}`);
    await uploadBytes(storageRef, img);
    const Url = await getDownloadURL(storageRef)
    console.log(Url);
    await addDoc(collection(db, "users"), {
      fullName:userd.fullName,
      age:userd.age,
      email:userd.email,
      image:Url
    });
  
    const ver = await deleteDoc(doc(db,"users", userd.id))
    console.log("ver",ver)
    
    alert("Updated")
  }catch(e) {
    console.log(e.message)
  }

  
}

export const ProfileData = async () => {
  const postAds = []
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    const dat = doc.data()
    dat.id = doc.id
    postAds.push(dat)
  });
  return postAds
}
ProfileData()

export const updateImg =async (item) => {
const {image} = item
try {
  const storageRef = ref(storage, `updateimage/${image.name}`);
  await uploadBytes(storageRef, image);
  const Url = await getDownloadURL(storageRef)
  return Url
} catch (error) {
  
}
}