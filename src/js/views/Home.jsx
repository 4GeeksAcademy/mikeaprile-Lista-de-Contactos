import React , { useContext} from "react";
import "../../styles/index.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";


export const Home = () => {
	const { store, action } = useContext(Context)
	return (
	<>
	 
	<Link to="/create-contact">
    <button className="btn btn-success">Add New Contact</button>
	</Link>
	 <div className="text-center mt-3 ">
		<div className="card mx-5">
  			<div className="row g-0">
    			<div className="col-md-4">
      			<img src="" className="img-fluid rounded" alt="" />
    			</div>
    			<div className="col-md-4">
      			<div className="card-body text-start">
				  
        			<h5 className="card-title m-1"></h5>
        			<p className="card-text m-1 text-secondary"><i className="fas fa-map-pin pe-1"></i>{store.Contacts.map((iteam) => <li>{iteam.full_name}</li>)}</p>
					<p className="card-text m-1 text-secondary"><i className="fas fa-phone pe-1"></i>Telephone</p>
					<p className="card-text m-1 text-secondary"><i className="fas fa-envelope pe-1"></i>Adress</p>
      			</div>
    			</div>
				<div className="col-md-4 text-end">
					<i className="far fa-edit fa-lg p-2 pe-4"></i>
					<i className="fas fa-trash-alt fa-lg p-2 ps-4"></i>
    			</div>
  			</div>
		</div>
	</div>

	</>
 );
};