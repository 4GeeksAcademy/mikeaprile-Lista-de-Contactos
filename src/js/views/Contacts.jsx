import React, {useContext} from "react";
import {Context}  from "../store/appContext.js";
import { Link } from "react-router-dom";

export const Contacts = () => {

  const {store,actions} = useContext(Context)
  

  const handleDelete = (contactID) => {
    actions.deleteContact(contactID)   

  }

  return (
    <div className="container">
      
        <div className="my-4 d-flex justify-content-center">
      <Link to="/contacts">
          <button className="btn btn-success m-4">Add new contact</button>
      </Link>      
      <Link to="/">
          <button className="btn btn-primary m-4">Back to home</button>
      </Link>
      </div>
    
      <ul>
        {store.allContactsAgenda.map((item) => <li key={item.id}>
          <div className="row">
            <div className="image col-3">
              <img
                className="rounded-circle"
                alt="avatar1"
                src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp"
              />
            </div>
            <div className="info col-7">
              <h5>{item.full_name}</h5>
              <div className="d-flex align-items-center mb-2">
                <i className="fas fa-map-marker-alt"></i>
                <span className="ms-3">{item.address}</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i className="fas fa-phone"></i>
                <span className="ms-3">{item.phone}</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="far fa-envelope"></i>
                <span className="ms-3">{item.email}</span>
              </div>
            </div>
            <div className="col-2 iconosFinales">
              <i className="fas fa-pencil-alt m-3"></i>
              <i className="fas fa-trash-alt m-3" onClick={()=> handleDelete(item.id)}></i>
            </div>
        </div>
        </li> 
     )}
        
      </ul>
    </div>
  );
};