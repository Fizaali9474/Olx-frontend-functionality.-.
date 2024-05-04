
import { updateImg } from "../config/Firebase";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Update(props) {
    const { state } = useLocation()
    // const { id, description, img, price } = state
    const {id} = state
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')

    useEffect(() => {
        setDescription(state.description),
            // setImage(state.img)
        setPrice(state.price)
        setTitle(state.title)
    }, [])


    const updateFunc = async () => {
        console.log(description, price, "in UPDATE")
        try {

            const imgUrl = await updateImg({ image })
            console.log(imgUrl, "URL")
            await fetch(`http://localhost:3001/products/update/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                     title, description, price, Image: imgUrl
                    })
                }

            )
            alert("Updated")
        } catch (error) {
console.log(error.message)
        }
    }



    return (
        <div>

            <div className="card"
                style={{ width: "170px" }}>
                <img src={state.img} className="card-img-top" alt="..." />
                <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                <div className="card-body">
                    <div className="titleDiv">
                        {/* <h5 className="card-title">RS {price}</h5> */}
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                        <i className="fa-regular fa-heart "></i>
                    </div>
                    <br></br>
                    {/* <h6 className="card-subtitle mb-2 text-body-secondary">{description}</h6> */}
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <p className="card-text text-body-secondary m-0">Karachi, Pakistan</p>
                    <p className="card-text text-body-secondary">8 days ago</p>


                    <p style={{
                        backgroundColor: "blue", color: "white", fontFamily: "40px",
                        height: "30px"
                    }}
                        onClick={updateFunc}
                    >Update</p>



                </div>
            </div>

        </div>
    )
}


export default Update