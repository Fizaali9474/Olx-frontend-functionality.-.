import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
//import { useParams } from 'react-router-dom';//
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Header from '../Header/index';
import Footer from '../Footer/index';
import './index.css'
import Category from '../Category';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from "axios";
//import './styles.css';//

// import required modules
import { Navigation, Pagination } from 'swiper/modules';


function Detailfb() {
  const db = getFirestore()
  const { id } = useParams()
  const [product, setProduct] = useState()
 
  
  console.log("product", product);

  useEffect(() => {
    
      const getProductDetail = async () => {
        console.log('Id:', id);
      
        const fetchProducts = async () => {
          try {
            
            if (id) {
              const response = await axios.get('http://localhost:3001/products');
              setProduct(response.data.data.find((e) => e._id == id));
            }
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
        
        // }
        fetchProducts();
      };
      getProductDetail();
  }, [id]); 

  return (

    <div>
      <Header />
      <Category />
      {!product ? (
        <h2>Loading...</h2>
      ) : (

        <div className='container'>
          <div className='main'>
            <div className='imag'>
              {/* <img src={product.imageUrl} alt={'img product'}/> */}
              
                <Swiper

                  navigation={true}
                  pagination={true}
                  modules={[Navigation, Pagination]}
                  className="mySwiper"
                >
            {      
                 product &&  (

                   <    SwiperSlide style={{width:"300px" , height:"700px"  }}  >
                   <img src={product.image}/>
               
                   </SwiperSlide> 
                   
                  
                     
                  )
                }
                </Swiper>
            </div>
            <div className='detail'>
              <>
              </>


              <h2 style={{ fontSize: "20px" }} className='work'>{product.tittle}</h2>
              <h3  style={{ fontSize: "30px" }} className='work'>RS{product.price}</h3>
              <h4 style={{ fontSize: "20px" }} className='work'>Description: {product.description}</h4>
              <h5 style={{ fontSize: "20px" }} className='work'>Brand: {product.brand}</h5>
              <h6 style={{ fontSize: "20px" }} className='work'>Category: {product.category}
              </h6>
              <button className="d-b" style={{
                backgroundColor: "blue", borderRadius: "50px",
                fontSize: "30px"
              }}  >Add to Cart</button>
            </div>
          </div>
          <div className='main2'>
            <img className="profile" src=' https://media-mct1-1.cdn.whatsapp.net/v/t61.24694-24/416784742_927005185458234_8774621136094337637_n.jpg?ccb=11-4&oh=01_AdSaHBm9ipyErETxaTS-3dzkOgbGp2R0usb8GtW12UqUMg&oe=65BD0E09&_nc_sid=e6ed6c&_nc_cat=110   ' alt='' />
            <ul>
              {/* <h2>Fiza Ali</h2>*/}
              <p style={{ fontSize: "20px", textAlign: "left" }}  >member since 2023</p>

            </ul>
          </div>

          <Footer />
        </div>

      )}

    </div>
  )
}

export default Detailfb