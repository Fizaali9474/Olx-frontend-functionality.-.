/*import React from "react";
import "./index.css"
function Profile(){

    return(
<h1>Hey</h1>

    )
}
export default Profile*/


import React from "react";
import { useState , useEffect} from "react";
import "./index.css"
import Footer from "../Footer/index";
import { useNavigate } from "react-router-dom";
import Header from '../Header/index';
import Category from "../Category/index"
import { updateData , ProfileData} from "../../config/Firebase";
import { getAuth, onAuthStateChanged, signout } from "firebase/auth";
import {getDatabase, ref, update} from 'firebase/database'

function Profile () {

  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  const [image, setImage] =useState('null')
  const [name, setName] = useState()
  const [DOB, setDOB] = useState()
  const [img, setImg] = useState()
  const [userData, setUserData] = useState(null)
  const [description, setDiscription] = useState()
  const [pdata, setPdata]=useState()
  const [age, setAge] = useState()
  const [email, setEmail] = useState()
  

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth,(user) => {
      if (user) {
        console.log ("user", user)
        const uid = user;
        setUser(uid.email);
        console.log(uid.email)
      } else {
        setUser("")
      }
    })
  },[]);


  useEffect(() => {
    fetchData();
  
    async function fetchData() {
      try {
        const pdata = await ProfileData();
        console.log('pdata:', pdata);
  
        const foundItem = pdata.filter((res) => res.email === user);
  
        if (foundItem.length > 0) {
          console.log("Element found:", foundItem);
          setUserData((prevUserData) => {
            console.log("Previous userdata:", prevUserData);
            return foundItem;
          });
  
          if (foundItem[0]) {
        
            setImage(foundItem[0].image);
          } else {
            setImage(null);
          }
        } else {
          console.log("Not found");
          setImage(null);
        }
      } catch (e) {
        alert(e.message);
      }
    }
  }, [user]);
  

 

async function run(e) {
  await updateData(userData,img)
  // navigate("/")
}

useEffect(() => {
  if (userData && userData[0]){
    setImage(userData[0].image)
  }else {
    setImage(null);
  }
},[userData])


    return (
        <div>
              
              <Header/>
{/* <Category/> */}
{/* <Dashboardfb/>*/}
        <div className="profile-container">
        <div className="section-heading1">Edit Profile</div>
        <div className="horizontal-line" />
        <div className="section-heading2">Profile Photo</div>
        <div className="profile-photo-container">
          <img
            className="profile-photo"
            src={image ? `${image}`:
  "https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"  }
            alt="Profile Photo"
          />
         <div action="/upload" method="post" enctype="multipart/form-data">
    <label for="file" class="upload-button "> Upload Photo</label>
    <input style={{display:"none"}} type="file" onChange={(e) => setImg(e.target.files[0])} id="file" name="file" accept=".txt, .pdf, .doc, .docx"/>
       </div>
     { /* <p className="pafter">JPG, JPEG, PNG Min: 400px, Max: 1024px</p>*/ }

        </div>
        <div className="horizontal-line" />
        <div className="section-heading3">Name</div>
        <div className="input-name">
          <input 
          value = {userData ? `${userData[0].fullName}` : ""}
          onChange={(e) => setName(e.target.value)} type="text" placeholder="Your Name" />
        </div>
        <div className="important-info">
     <div className="why-header">
      <img className='iconn' src="https://static.vecteezy.com/system/resources/previews/000/573/380/original/vector-sign-of-bulb-icon.jpg" alt="" />
      <h4 style={{textAlign:"center"}} >Why is it important?</h4>
        </div>
       <p>
        OLX is built on trust. Help other people get to know you. Tell them about
        the things you like. Share your favorite brands, books, movies, shows,
        music, food. And you will see the results…
    </p>
        </div>
        <div className="section-heading4">Age</div>
        <div className="input-age">
          <input
          value = {userData ? `${userData[0].age}` : ""}
          onChange={(e) => setAge(e.target.value)}
          type="text" placeholder="Your Age" />
        </div>
        <div className="input-about">
          <input type="text" className="about-in" placeholder="About Me (optional)" />
        </div>
        <div className="horizontal-line" />
        <div className="section-heading5">Contact Information</div>
        <div className="input-phone">
          <input type="text" placeholder="Phone Number" />
        </div>
        <div className="input-gmail">
          {/* <input type="email" placeholder="Email" /> */}
          <input
          value = {userData ? `${userData[0].email}` : ""}
          onChange={(e) => setEmail(e.target.value)}
          type="number" placeholder="Your Email" />
        </div>
        <div className="horizontal-line" />
        <button onClick={run} className="save-button">Save Changes</button>
      </div>

      <Footer/>
      </div>
      
    )
}

export default Profile;



