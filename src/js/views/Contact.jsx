import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";
import { Context } from "../store/appContext.js";

export const Contact = () => {
	const { store, actions } = useContext(Context);

	const handleDelete = (id) => {
		actions.deleteContact(id)
	}

		return (
			<div className="text-center mt-5 m-4">
					  {store.user.map((item, id) => {
						return <div key={id} className="row g-0 border rounded m-2">
								<div className="col-md-4">
								  <img src="https://m-scs.com/public/storage/users/1657129981.jpeg" className="img-fluid rounded-circle m-1" alt="..." />
								</div>
								<div className="col-md-4">
								  <div className="card-body text-start">
									<h5 className="card-title m-1"> {item.full_name}</h5>
									<p className="card-text m-1 text-secondary" ><i className="fas fa-map-pin pe-1" ></i> {item.address}</p>
									<p className="card-text m-1 text-secondary" ><i className="fas fa-phone pe-1" ></i> {item.phone}</p>
									<p className="card-text m-1 text-secondary" ><i className="fas fa-envelope pe-1" ></i> {item.email}</p>
								  </div>
								</div>
								<div className="col-md-4 text-end mt-2">
								<Link to={`/contact/${item.id}`} className="text-dark"><i className="far fa-eye me-3"> </i></Link>
								<Link to={`/update-contact/${item.id}`}  className="text-dark"><i className="far fa-edit fa-lg p-2 "></i></Link>
									<span type="button" onClick={()=>{handleDelete(item.id)}} className="border-0 text-dark bg-white" ><i className="fas fa-trash-alt fa-lg p-2 ps-2 me-5"></i></span>
								</div>
								
								  </div>
							})}
					<span className="list-group-item bg-light text-end fw-lighter">
								{store.user.length === 0 ? "No contacts, add one please" : store.user.length + " contacts."}
					</span>
			</div>
			
		)}