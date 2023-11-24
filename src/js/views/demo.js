import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
		
			<br />
			<Link to="/">or get back to contacts</Link>
		</div>
	);
};
