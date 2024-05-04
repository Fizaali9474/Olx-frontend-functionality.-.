
import React from "react";
import { useState, useEffect } from "react";
import Header from "../Header/index";
import Category from "../Category/index";
import Footer from "../Footer/index";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, getForm } from "../../config/Firebase";
import Card from "../Card";
import "./index.css";
import axios from 'axios';

function Dashboardfb() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [Posts, setPosts] = useState([]);
  const [user, setUser] = useState("null");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/products');
      setPosts(response.data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {

        setUser(user);

      } else {
        setUser(null);
      }
    });
  }, []);

  // useEffect(() => {
  //   getProducts();
  // }, []);

  // const getProducts = async () => {
  //   const form = await getForm();
  //   setProducts(form);
  // };




  // if (!Posts.length) {
  //   return <div>
  //     <img src='https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif' />
  //   </div>
  // }
  // console.log(Posts,'post')

  return (
    <div className="main">
      <Header />
      <Category />
      <div>
        {user ?
          <h3>{user.email}</h3>

          :
          <button style={{ backgroundColor: "red", color: "black", fontSize: "20px" }}
            onClick={() => navigate
              ("/login")}>Please Login!</button>}
      </div>


      <div className="container-fluid text-center">
        <div className="row">
          {
            !Posts ? <img src='https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif' /> :
              Posts.map((item) => (
                < Card
                  id={item._id}
                  title={item.title}
                  brand={item.brand}
                  description={item.description}
                  price={item.price}
                  category={item.category}
                  img={item.image}

                />
              ))}
          {/* } */}
          {/* {Posts.map((item) => (
              < Card
                id={item._id}
                title={item.title}
                brand={item.brand}
                description={item.description}
                price={item.price}
                category={item.category}
                img={item.image}  
           
              />
              ))} */}


        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Dashboardfb;
