import React from "react";
import "../Sandeep-Task/foodTask.css";

export function FoodTask(){
    return(
        <div className="container-fluid bg-dark p-4">
            <div className="header">
                <div className="d-flex justify-content-between bg-danger-subtle p-4 mt-2 fw-bold fs-6">
                    <span>Home</span>
                    <span>Order</span>
                    <span>Food</span>
                    <span>Restaurant</span>
                    <span>Testimonial</span>
                    <span>Contact us</span>
                    <span className="bi bi-list"></span>
                </div>
            </div>
            <hr/>
            <div className="main">
                <div className=" ms-1 row">
                    <div className="col-6 bg-warning-subtle">
                        <h2 className="mt-4 ms-3 mb-4">LOREM IPSUM</h2>
                        <p className="ms-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ab sunt exercitationem nesciunt maxime mollitia atque laboriosam asperiores dicta debitis iure provident architecto maiores sit nemo modi, impedit facere fugiat!</p>
                        <button className="btn btn-danger mb-4 mt-4 ms-3">Click Me</button>
                    </div>
                    <div className="col-6">
                        <img src="https://res.cloudinary.com/dypa0nagm/image/upload/v1708678000/grilled-burger_bumtf2.avif" width="100%" alt="Image Views"/>
                    </div>
                </div>
                <hr/>
                <div className=" bg-warning-subtle Grand" style={{height:'500px'}} >
                <div className="Parentcontainer">
                    <div className="child">
                        <img src="https://res.cloudinary.com/dypa0nagm/image/upload/v1708679343/streetchairs_rpjtjo.jpg" alt="" width="200px" height="200px" />
                        <img src="https://res.cloudinary.com/dypa0nagm/image/upload/v1708679632/Stag_bnthmc.jpg" alt="" width="200px" height="200px" />
                    </div>
                    <div className="child1">
                        <img src="https://res.cloudinary.com/dypa0nagm/image/upload/v1708679309/Europian_food_jnhvna.jpg" alt="" height="450px" />
                    </div>
                </div>
                <div className=" bg-danger-subtle rounded rounded-2 Subparent">
                    <div>
                        <p className="p-2 ms-2">LOREM IPSUM</p>
                    </div>
                    <div className="p-4">
                        <h2>LOREM IPSUM SET ADEMIR</h2>
                    </div>
                    <div>
                        <buttoon className=" ms-3 btn btn-danger">Click Here</buttoon> <span className="bi bi-arrow-right"></span>
                    </div>
                </div>
                </div>
                
                </div>
            </div>
        
    )
}