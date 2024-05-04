


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/index"
import Header from "../Header/index"
import Category from "../Category/index"
function Detail() {


  const { Id } = useParams();
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    getProductDetail();
  }, [Id]);

  const getProductDetail = () => {
    console.log('adId:', Id);
    fetch(`https://dummyjson.com/products/${Id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductDetail(data); // Set the fetched data to the state
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
 });
  };

  if (!productDetail) {
    return <div>Loading...</div>;
  }

  const { title, description, price, category, images } = productDetail;

  return (
    <div className="detail">
<Header/>
<Category/>


      <div>
      <img className="d-i" src={images[0]} alt={title} />
      </div>
      <div className="details">
        <h1 style={{fontSize:"30px"}}  >Fiza Ali</h1>
      <h2 style={{fontSize:"40px"}}  className="d-t">{title}</h2>
      <p style={{fontSize:"20px"}}  className="d-p">Price: {price}</p>
      <p style={{fontSize:"20px"}}   className="d-c">Category: {category}</p>
      <p  style={{fontSize:"20px"}} className="d-d">{description}</p>
      <button className="d-b"  style={{backgroundColor:"blue" , borderRadius:"50px" , 
      fontSize:"30px" }}  >Add to Cart</button>
      </div>
      
  { /*   <UserProfile/>*/}
    <Footer/>
        
   </div>
  );
}

export default Detail;







