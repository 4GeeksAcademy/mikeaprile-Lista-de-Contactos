import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams} from "react-router-dom";
import "../../styles/index.css";
import { Context } from "../store/appContext.js";

export const UpdateContact = () => {
    const { store, actions } = useContext(Context);
    const parametro = useParams()
    const currentUser = store.user.filter((item) => item.id = parametro.idContact)
    const user = currentUser[0]
  
    const [ newName, setnewName ] = useState( user.full_name );
    const [ newAddress, setnewAddress ] = useState( user.address );
    const [ newPhone, setnewPhone ] = useState( user.phone);
    const [ newEmail, setnewEmail ] = useState( user.email );
    const navigate = useNavigate();
  


    const handleOnSubmit = (event) =>{
        event.preventDefault();
        const updateContact = {
            full_name: newName,
            address: newAddress,
            phone: newPhone,
            email: newEmail,
            agenda_slug: 'MikeAprile'
        };
        
        

        actions.refreshContact(updateContact, user.id);
        navigate('/')
    }

    return (
        <div>
            <h1 className="text-center">Add new Contact</h1>
            <form onSubmit={handleOnSubmit}>
                <div className="m-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="exampleInputFullName" aria-describedby="fullName" 
                    value={newName} onChange={(e) =>{setnewName(e.target.value)}}/>
                </div>
                <div className="m-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                    value={newEmail} onChange={(e) =>{setnewEmail(e.target.value)}} />
                </div>
                <div className="m-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                    <input type="number" className="form-control" id="exampleInputPhone" aria-describedby="phone" 
                    value={newPhone} onChange={(e) =>{setnewPhone(e.target.value)}}/>
                </div>
                <div className="m-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Adress</label>
                    <input type="text" className="form-control" id="exampleInputAdress" aria-describedby="adress" 
                    value={newAddress} onChange={(e) =>{setnewAddress(e.target.value)}}/>
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-secondary color-button m-3"> Save </button>
                </div>
                <Link className="m-3 text-dark" to="/"> or get back to contacts.</Link>
            </form>
        </div>
    )
}
