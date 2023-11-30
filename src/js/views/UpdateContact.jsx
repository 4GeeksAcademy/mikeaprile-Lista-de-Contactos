import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useParams} from "react-router-dom";
import "../../styles/index.css";
import { Context } from "../store/appContext.js";

export const UpdateContact = () => {
    const { store, actions } = useContext(Context);
    const params = useParams()
  
    const [ newName, setNewName ] = useState("");
    const [ newAddress, setNewAddress ] = useState("");
    const [ newPhone, setNewPhone ] = useState("");
    const [ newEmail, setNewEmail ] = useState("");
    const navigate = useNavigate();
  
    useEffect(() => {
        async function fetchData() {
            if (params.contactId && !store.newUser.id) {
              
                const response = await actions.getOneContact(params.contactId);
                const newUser = store.newUser;
                console.log(newUser);
                setNewName(newUser.newName);
                setNewAddress(newUser.newAddress);
                setNewPhone(newUser.newPhone);
                setNewEmail(newUser.newEmail);
            }
        }
        fetchData();
    }, [params.contactId, store.newUser]);


    const handleOnSubmit = (event) =>{
        event.preventDefault();
        const Contact = {
            full_name: newName,
            address: newAddress,
            phone: newPhone,
            email: newEmail,
            agenda_slug: 'MikeAprile'
        };
        
        

        const contactId = params.contactId; 
        actions.EditContact(contactId, Contact);
        navigate("/contact")

    };
        const handleCancel = () => {
            navigate("/contact"); 
        };

    return (
        <div>
            <h1 className="text-center">Update Contact</h1>
            <form onSubmit={handleOnSubmit}>
                <div className="m-3">
                    <label htmlFor="InputName" className="form-label fw-bold">Full Name*</label>
                    <input type="text" required className="form-control" id="InputName" aria-describedby="textHelp" 
                    value={newName} onChange ={(event) =>setNewName (event.target.value)}/>
                </div>
                <div className="m-3">
                    <label htmlFor="InputEmail" className="form-label fw-bold">Email*</label>
                    <input type="email" required className="form-control" id="InputEmail" aria-describedby="emailHelp" 
                    value={newEmail} onChange ={(event) =>setNewEmail (event.target.value)}/>
                </div>
                <div className="m-3">
                    <label htmlFor="InputPhone" className="form-label fw-bold">Phone*</label>
                    <input type="text" required className="form-control" id="InputPhone" aria-describedby="textHelp" 
                    value={newPhone} onChange={(event) =>{setNewPhone(event.target.value)}}/>
                </div>
                <div className="m-3">
                    <label htmlFor="InputAddress" className="form-label fw-bold">Address*</label>
                    <input type="text" required className="form-control" id="InputAddress" aria-describedby="textHelp" 
                    value={newAddress} onChange ={(event) =>setNewAddress(event.target.value)} />
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-info m-3"> Update </button>
                    <button type="button" className="btn btn-danger m-3" onClick={handleCancel}>Cancel</button>
                </div>
                <Link className="m-3 text-dark" to="/contact"> or get back to contacts.</Link>
            </form>
        </div>
    )
  }
