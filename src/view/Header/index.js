

import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged , signOut } from "firebase/auth";
import './index.css'

import { useDispatch, useSelector } from 'react-redux'
function Header () {
  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  const [image, setImage] =useState('null')
  const auth = getAuth();

  const [toggle, setToggle] = useState(false)
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cartReducer.cart)

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
    console.log("user:",user)
      
        const uid = user;
        setUser(uid.email);
        
      } else {
        setUser(null);
     setImage("null")
      
      }
  });
},[]);

 async function logout() {
  const auth = getAuth();
  await signOut(auth)
  setUser(null)
  setImage('null')
  console.log("logged out") }


  return(
  
   
<div>
<div className="container-fluid">
  <div className='first'>
    <div  className="header">
      <div  className="navbar">
        <img src="http://127.0.0.1:5500/images/olx1.JPG" alt="" />
        <div  className="countryselect" id="country">
          <div  className="select">
          

         <p id="text"  style={{height:"10px" , fontFamily:"bold" , fontSize:"20px" ,
          width:"500px" }} >
            Select your country</p>
            <i  className="fa-solid fa-down" id="moving"></i>
          </div>
        </div>
        <div  className="searchbox">
          <input  style={{ fontFamily:"bold" , fontSize:"35px" , width:"660px" ,
           }}
            type="text"
            className="searchclass"
            placeholder="Find Car, mobile phone and more.."
          />
        
        <div className="input-login"> 
          { user ?
            <div className="header-profile_img">
              <img className="header-img" src={image == "null" ? 
"https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
 :
 `${image}` }/>
               </div>
            :
            <a  style={{backgroundColor:"plum" , width:"50px" , height:"30px"}} href="#"
             onClick={() => navigate("/login")}> Login </a>
          }

<img style={{borderRadius:"100%"}}
   src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9395PGIlJyVM5ZD7SFPwNb7IiPXHbCs9lZ8Z3k2qz&s  "
        ></img>

{/*<div onClick={() => setToggle(!toggle)}>
           <img 
            width="10"
            height="80"
  
          />
            {cart.length}
        </div>

        {toggle && <div style={{ border: '1px solid black' }}>
            {cart.map(item => {
                return <div>
                    <h3>{item.title} - Rs. {item.amount}</h3>
                </div>
            })}
        </div>}
          </div>*/}

             { user ?
          <div className="logout-section">
            <div className="logout-sec_profile">
              <div className="sec-prof-main">
              <div className="sec-prof-img">
            <img className="header-img" src={image == "null" ? 
"https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
 :`${image}` }/>
              </div>
              <div className="prof-sec-data">
                <p>Hey</p>
                <h4>{user}</h4>
         
            <a href='/profile'>  <button  ><p>View and edit your profile</p></button></a>      

              </div>
              </div>
            </div>
            <hr className="hr bg-black" />
          <a href="#" onClick={logout}>Logout</a>
          </div>
           : ""  }
          </div>
        

        </div>
  
        <div  className="sellingpage">
        <a   href='/sell' >  <button  ><p>+ SELL</p></button></a>
        </div>
      </div>
    </div>
   <div>
</div>
   <div className='second'>

      <div  className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div  className="navbar-nav">
         
          <select className='category' name="" id="">
        <div style={{fontFamily:"fantasy" , fontSize:"30px"}}  >   < option value="">
          
          All Categories</option> </div>
        
       <option>   <a  className="active" href="#">laptop</a> </option>
       <option>    <a  className="active" href="#about">Cars</a></option>
       <option>   <a  className="active" href="#services">Motorcycles</a></option>
       <option>   <a  className="active" href="#blog">Houses</a></option>
       <option>   <a  className="active" href="#skills">Tablets</a></option>
       <option>    <a  className="active" href="#contact">land</a> </option></select>
        </div>
      </div>

     <div  className="list">
        <ul>
          <li>Laptop</li>
          <li>Cars</li>
          <li>Motorcycles</li>
          <li>Houses</li>
          <li>TV -Video -Audio</li>
          <li>Tablets</li>
          <li>Land & Plots</li> 
        </ul>
  </div> 
    </div> 
    </div>
    <div  className="adimg" >
      <div  className="col-md- text-center">
        <img src="https://images.olx.com.pk/thumbnails/423979386-800x600.webp" alt="" />
      </div>
      
    </div>
    </div>
   </div>
  )
}
export default Header;


