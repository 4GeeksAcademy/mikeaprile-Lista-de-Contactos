import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light mb-2">
			<Link to="/" className="nav-item">
				<span className="navbar-brand mb-0 h1 ms-4"><i className="fas fa-home fa-lg m-2"> Home </i></span>
			</Link>
			<div className="ml-auto">
				<button type="button" className="btn btn-danger m-2 " onClick={actions.deleteAgenda}> <i className="fas fa-user-times fa-lg pe-2"></i>Delete all contacts</button>
				
				<Link to="/contact">
					<button className="btn btn-success m-2 ">Contact List</button>
				</Link>
				<Link to="/add-contact">
					<button className="btn btn-primary m-2 ">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
