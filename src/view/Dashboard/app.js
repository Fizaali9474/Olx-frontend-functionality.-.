
import Card from "../Card/index"
import { useState, useEffect } from "react";
import Footer from "../Footer/index"
import Header from "../Header/index"
import Category from "../Category/index"
import { useNavigate } from "react-router-dom";
function  Dashboard() {
 // const navigate = useNavigate();//
   const [Posts, setPosts] = useState([]);

    useEffect(() => {
        getPostFromAPI();
      }, []);
    
      function getPostFromAPI() {
        fetch("https://dummyjson.com/products")
          .then((res) => res.json())
          .then((res) => {
            setPosts(res.products);
          });
      }console.log(Posts)

     if (!Posts.length)
     {
      return  <div>
          <img src='https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif' />
        </div>
   }


    
    return (
    
        <div >  
<Header/>
 <Category/>
<div class="container-fluid text-center">
  <div class="row">
   {Posts.map((item)=>(
         < Card 
         id={item.id}
              name={item.title}
              brand={item.brand}
              description={item.description}
              price={item.price}
              images={item.thumbnail }
              discountPercentage={item.discountPercentage}
              category={item.category}
              />
            ))}
        </div>
         </div>
 <Footer/>

       </div>
    )
}

export default Dashboard;