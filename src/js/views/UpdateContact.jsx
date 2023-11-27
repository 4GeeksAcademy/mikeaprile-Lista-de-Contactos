import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/index.css";
import { Context } from "../store/appContext.js";

export const UpdateContact = () => {
    const { store, actions } = useContext(Context);
    const [ name, setName ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ email, setEmail ] = useState("");
    const navigate = useNavigate();


    const handleOnSubmit = (event) =>{
        event.preventDefault();
        const contact = {
            full_name: name,
            address: address,
            phone: phone,
            email: email,
            agenda_slug: 'MikeAprile'
        };
        actions.refreshContact(contact, id);
        navigate('/')
    }

    return (
        <div>
            <h1 className="text-center">Add new Contact</h1>
            <form onSubmit={handleOnSubmit}>
                <div className="m-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="exampleInputFullName" aria-describedby="fullName" placeholder="Full Name" 
                    value={name} onChange={(e) =>{setName(e.target.value)}}/>
                </div>
                <div className="m-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter mail"
                    value={email} onChange={(e) =>{setEmail(e.target.value)}} />
                </div>
                <div className="m-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                    <input type="number" className="form-control" id="exampleInputPhone" aria-describedby="phone" placeholder="Enter phone"
                    value={phone} onChange={(e) =>{setPhone(e.target.value)}}/>
                </div>
                <div className="m-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
                    <input type="text" className="form-control" id="exampleInputAddress" aria-describedby="address" placeholder="Enter address"
                    value={address} onChange={(e) =>{setAddress(e.target.value)}}/>
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-secondary color-button m-3"> Save </button>
                </div>
                <Link className="m-3 text-dark" to="/"> or get back to contacts.</Link>
            </form>
        </div>
    )
}
