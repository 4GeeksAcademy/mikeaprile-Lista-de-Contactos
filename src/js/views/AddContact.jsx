import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/index.css";
import { Context } from "../store/appContext.js";

export const AddContact = () => {
    const { store, actions } = useContext(Context);
    const [ name, setName ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ email, setEmail ] = useState("");
    const navigate = useNavigate();

    const handleOnSubmit = (event) =>{
        event.preventDefault();
        const newContact = {
            full_name: name,
            address: address,
            phone: phone,
            email: email,
            agenda_slug: 'MikeAprile'
        };
        actions.AddContact(newContact);
        navigate('/')
    }

    return (
        <div>
            <h1 className="text-center m-5">Add new Contact</h1>
            <form onSubmit={handleOnSubmit}>
                <div className="m-4">
                    <label htmlFor="full_name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="full_name" placeholder="Full Name" name="full_name" value={name} onChange={(e) =>{setName(e.target.value)}}/>
                </div>
                <div className="m-4">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter mail" name="email" value={email} onChange={(e) =>{setEmail(e.target.value)}}/>
                </div>
                <div className="m-4">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="number" className="form-control" id="phone" placeholder="Enter phone" name="phone" value={phone} onChange={(e) =>{setPhone(e.target.value)}}/>
                </div>
                <div className="m-4">
                    <label htmlFor="exampleInputEmail1" className="form-label">Adress</label>
                    <input type="text" className="form-control" id="adress" placeholder="Enter adress" name="adress" value={address} onChange={(e) =>{setAddress(e.target.value)}}/>
                </div>
            
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary m-4">Save</button>
                </div>
                <Link className="m-4 primary" to="/"> or get back to contacts.</Link>
            </form>
            
        </div>
    )
}