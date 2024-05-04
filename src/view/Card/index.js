import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"

function Card({ title, description, price, id, img }) {
  console.log(id, 'id in cards')
  const navigate = useNavigate();

  const deleteFunc = async (id) => {
    console.log(id, 'id in delete')
    try {
      await fetch(`http://localhost:3001/products/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((res) => console.log(res));

    } catch (error) {
      console.log(error.message)
    }
  }




  return (
    // <div className="main">
    <div className="col-md-3 mb-4  cards" >
      <div className="card"
        style={{ width: "170px" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="titleDiv">
          <h5 className="card-title">{title}</h5>

            <h5 className="card-title">RS {price}</h5>
            <i className="fa-regular fa-heart "></i>
          </div>
          <br></br>
          <h6 className="card-subtitle mb-2 text-body-secondary">{description}</h6>

          <p className="card-text text-body-secondary m-0">Karachi, Pakistan</p>
          <p className="card-text text-body-secondary">8 days ago</p>
          <p style={{
            backgroundColor: "black", color: "white", fontFamily: "40px",
            height: "30px"
          }}>Add To Cart</p>

          <p style={{
            backgroundColor: "blue", color: "white", fontFamily: "40px",
            height: "30px"
          }} onClick={() =>
            navigate("/update", {
              state: {
                description, img, id, price, title
              },
            })
          }>Update</p>


          <p style={{
            backgroundColor: "blue", color: "white", fontFamily: "40px",
            height: "30px"
          }}
            onClick={
             ()=> deleteFunc(id)
            }
          >Delete</p>
          <p style={{
            backgroundColor: "blue", color: "white", fontFamily: "40px",
            height: "30px"
          }} onClick={() => navigate(`detailfb/${id}`)}>About More</p>
        </div>
      </div>
    </div>
    //  </div>
  );
}


export default Card;


